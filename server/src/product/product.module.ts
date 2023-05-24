import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { ProductCategory } from './product-category.model';
import { ProductColor } from './product-color.model';
import { ProductSize } from './product-size.model';
import { User } from '../user/user.model';
import { PaginationService } from '../pagination/pagination.service';
import { FiltersService } from '../filters/filters.service';

@Module({
  providers: [ProductService, PaginationService, FiltersService],
  controllers: [ProductController],
  imports: [
    SequelizeModule.forFeature([
      Product,
      Manufacturer,
      ProductCategory,
      ProductColor,
      ProductSize,
      User,
    ]),
  ],
})
export class ProductModule {}
