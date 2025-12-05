import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'members' })
export class MemberEntity {
  @PrimaryGeneratedColumn()
  member_id: number;

  @Column({ length: 30 })
  first_name: string;

  @Column({ length: 30, nullable: true })
  middle_name?: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ type: 'smallint', default: 1 })
  status: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  registration_date: string;

  @Column({ length: 255 })
  password_hash: string;
}
