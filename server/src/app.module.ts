import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CategoryModule } from './category/category.module';
import * as path from 'path';
import { Category } from './category/category.model';
import { ColorModule } from './color/color.module';
import { Color } from './color/color.model';
import { SizeModule } from './size/size.module';
import { Size } from './size/size.model';
import { ProductModule } from './product/product.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { Product } from './product/product.model';
import { Manufacturer } from './manufacturer/manufacturer.model';
import { ProductCategory } from './product/product-category.model';
import { ProductColor } from './product/product-color.model';
import { ProductSize } from './product/product-size.model';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.model';
import { UserRoles } from './user/user-role.model';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/cart.model';
import { AuthModule } from './auth/auth.module';
import { PaginationModule } from './pagination/pagination.module';
import { FilesModule } from './files/files.module';
import { Files } from './files/files.model';
import { ProductFiles } from './product/product-files.model';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //библа конфиг для env
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      //для раздачи статики
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Category,
        Color,
        Size,
        Product,
        Manufacturer,
        ProductCategory,
        ProductColor,
        ProductSize,
        ProductFiles,
        Role,
        UserRoles,
        Cart,
        Files,
      ],
      autoLoadModels: true,
    }),
    UserModule,
    CategoryModule,
    ColorModule,
    SizeModule,
    ProductModule,
    ManufacturerModule,
    ProductSize,
    RoleModule,
    CartModule,
    AuthModule,
    PaginationModule,
    FilesModule,
    FiltersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
