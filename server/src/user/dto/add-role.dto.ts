import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'stroka' })
  readonly value: string;
  @IsNumber({}, { message: 'is number need' })
  readonly userId: number;
}
