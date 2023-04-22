import { IsString } from 'class-validator';

export class CreateColorDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly keyWord: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly hex: string;
}
