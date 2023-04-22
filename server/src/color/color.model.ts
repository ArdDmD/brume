import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.model';
import { ProductColor } from '../product/product-color.model';

interface ColorCreationAttrs {
  name: string;
  keyWord: string;
  hex: string;
}

@Table({ tableName: 'colors', createdAt: false, updatedAt: false })
export class Color extends Model<Color, ColorCreationAttrs> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hex: string;

  @BelongsToMany(() => Product, () => ProductColor)
  products: Product[];
}
