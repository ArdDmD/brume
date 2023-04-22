import { IsString } from 'class-validator';

export class CreateManufacturerDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
