import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly keyWord: string;
}
