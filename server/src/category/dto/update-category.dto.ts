import { IsInt, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsInt({ message: 'Укажите id' })
  readonly id: number;

  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly keyWord: string;
}
