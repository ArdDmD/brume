import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Category } from '../category/category.model';
import { ProductCategory } from './product-category.model';
import { ProductColor } from './product-color.model';
import { Color } from '../color/color.model';
import { Size } from '../size/size.model';
import { ProductSize } from './product-size.model';
import { User } from '../user/user.model';
import { Cart } from '../cart/cart.model';
import { Files } from '../files/files.model';
import { ProductFiles } from './product-files.model';

interface ProductCreationAttrs {
  name: string;
  vendorCode: number;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vendorCode: number;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => Manufacturer)
  @Column({
    type: DataType.INTEGER,
  })
  manufacturerId: number;

  @BelongsTo(() => Manufacturer)
  manufacturer: Manufacturer;

  @BelongsToMany(() => Category, () => ProductCategory)
  categories: Category[];

  @BelongsToMany(() => Color, () => ProductColor)
  colors: Color[];

  @BelongsToMany(() => Size, () => ProductSize)
  size: Size[];

  @BelongsToMany(() => User, () => Cart)
  user: User[];

  @BelongsToMany(() => Files, () => ProductFiles)
  files: Files[];
}
