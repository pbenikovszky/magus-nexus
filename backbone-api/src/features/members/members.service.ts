import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from './member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepo: Repository<MemberEntity>,
  ) {}

  findAll() {
    return this.membersRepo.find();
  }

  findOne(id: number) {
    return this.membersRepo.findOne({ where: { member_id: id } });
  }

  findByEmail(email: string) {
    return this.membersRepo.findOne({ where: { email: email } });
  }

  create(data: Partial<MemberEntity>) {
    const member = this.membersRepo.create(data);
    return this.membersRepo.save(member);
  }

  async update(id: number, data: Partial<MemberEntity>) {
    await this.membersRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.membersRepo.delete(id);
  }
}
