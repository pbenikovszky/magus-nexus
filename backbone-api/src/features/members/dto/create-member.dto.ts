import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  FirstName: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  MiddleName?: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  LastName: string;

  @IsEmail()
  @MaxLength(255)
  EmailAddress: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  Password: string;
}
