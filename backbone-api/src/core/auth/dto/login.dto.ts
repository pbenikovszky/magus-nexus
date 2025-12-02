import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(255)
  EmailAddress: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  Password: string;
}
