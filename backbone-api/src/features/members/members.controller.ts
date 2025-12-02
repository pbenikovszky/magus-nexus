import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Member } from './member.entity';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  getAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.membersService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Member>) {
    return this.membersService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: Partial<Member>) {
    return this.membersService.update(id, body);
  }
}
