import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateMemberDto } from 'src/features/members/dto/create-member.dto';
import { MembersService } from 'src/features/members/members.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly membersService: MembersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: CreateMemberDto) {
    const existing = await this.membersService.findByEmail(dto.EmailAddress);
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const hashed = await bcrypt.hash(dto.Password, 10);

    const member = await this.membersService.create({
      first_name: dto.FirstName,
      middle_name: dto.MiddleName,
      last_name: dto.LastName,
      email: dto.EmailAddress,
      password_hash: hashed,
      status: 1, // active
      registration_date: new Date().toISOString().slice(0, 10), // 'YYYY-MM-DD'
    });

    const token = this.signToken(member.member_id, member.email);
    return { member, access_token: token };
  }

  async login(email: string, password: string) {
    const member = await this.membersService.findByEmail(email);
    if (!member) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const ok = await bcrypt.compare(password, member.password_hash);
    if (!ok) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.signToken(member.member_id, member.email);
    return { member, access_token: token };
  }

  private signToken(memberId: number, email: string): string {
    const payload = { sub: memberId, email };
    return this.jwtService.sign(payload);
  }
}
