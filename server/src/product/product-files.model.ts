import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { Color } from '../color/color.model';
import { Files } from '../files/files.model';

@Table({ tableName: 'product_files', createdAt: false, updatedAt: false })
export class ProductFiles extends Model<ProductFiles> {
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

  @ForeignKey(() => Files)
  @Column({
    type: DataType.INTEGER,
  })
  filesId: number;
}
