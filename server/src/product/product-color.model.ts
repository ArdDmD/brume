import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { Color } from '../color/color.model';

@Table({ tableName: 'product_color', createdAt: false, updatedAt: false })
export class ProductColor extends Model<ProductColor> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
  })
  colorId: number;
}
