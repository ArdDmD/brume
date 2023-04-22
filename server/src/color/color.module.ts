import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Color } from './color.model';
import { ProductColor } from '../product/product-color.model';

@Module({
  controllers: [ColorController],
  providers: [ColorService],
  imports: [SequelizeModule.forFeature([Color, ProductColor])],
})
export class ColorModule {}
