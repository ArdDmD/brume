import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.model';
import { ProductSize } from '../product/product-size.model';

interface SizeCreationAttrs {
  name: string;
  keyWord: string;
}

@Table({ tableName: 'size', createdAt: false, updatedAt: false })
export class Size extends Model<Size, SizeCreationAttrs> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  keyWord: string;

  @BelongsToMany(() => Product, () => ProductSize)
  products: Product[];
}
