import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.model';
import { User } from '../user/user.model';

@Table({ tableName: 'cart', createdAt: false, updatedAt: false })
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  count: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
