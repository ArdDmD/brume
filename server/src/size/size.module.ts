import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from './size.model';
import { ProductSize } from '../product/product-size.model';

@Module({
  providers: [SizeService],
  controllers: [SizeController],
  imports: [SequelizeModule.forFeature([Size, ProductSize])],
})
export class SizeModule {}
