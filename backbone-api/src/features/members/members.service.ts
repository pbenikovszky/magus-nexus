import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepo: Repository<Member>,
  ) {}

  findAll() {
    return this.membersRepo.find();
  }

  findOne(id: number) {
    return this.membersRepo.findOne({ where: { MemberId: id } });
  }

  findByEmail(email: string) {
    return this.membersRepo.findOne({ where: { EmailAddress: email } });
  }

  create(data: Partial<Member>) {
    const member = this.membersRepo.create(data);
    return this.membersRepo.save(member);
  }

  async update(id: number, data: Partial<Member>) {
    await this.membersRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.membersRepo.delete(id);
  }
}
