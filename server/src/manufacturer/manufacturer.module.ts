import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Manufacturer } from './manufacturer.model';
import { Product } from '../product/product.model';

@Module({
  providers: [ManufacturerService],
  controllers: [ManufacturerController],
  imports: [SequelizeModule.forFeature([Manufacturer, Product])],
})
export class ManufacturerModule {}
