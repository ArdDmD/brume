import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { Product } from '../product/product.model';
import { User } from '../user/user.model';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [SequelizeModule.forFeature([Cart, Product, User])],
})
export class CartModule {}
