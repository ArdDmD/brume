import { IsInt, IsString } from 'class-validator';

export class UpdateManufacturerDto {
  @IsInt({ message: 'Укажите id' })
  readonly id: number;

  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
