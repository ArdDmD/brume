import { ArrayMinSize, IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  readonly description: string;

  @IsInt({ message: 'Должно быть строкой' })
  readonly vendorCode: number;

  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];
}
