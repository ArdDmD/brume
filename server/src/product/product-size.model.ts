import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { Size } from '../size/size.model';

@Table({ tableName: 'product_size', createdAt: false, updatedAt: false })
export class ProductSize extends Model<ProductSize> {
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

  @ForeignKey(() => Size)
  @Column({
    type: DataType.INTEGER,
  })
  sizeId: number;
}
