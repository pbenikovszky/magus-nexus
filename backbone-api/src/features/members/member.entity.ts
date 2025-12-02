import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Members')
export class Member {
  @PrimaryGeneratedColumn()
  MemberId: number;

  @Column({ length: 30 })
  FirstName: string;

  @Column({ length: 30, nullable: true })
  MiddleName?: string;

  @Column({ length: 50 })
  LastName: string;

  @Column({ length: 255, unique: true })
  EmailAddress: string;

  @Column({ length: 255 })
  Password: string; // hashed password

  @Column({ type: 'tinyint', unsigned: true })
  Status: number;

  @Column({ type: 'date' })
  DateOfRegistration: string; // or Date if you prefer
}
