import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.model';
import { ProductCategory } from '../product/product-category.model';

interface CategoryCreationAttrs {
  name: string;
  keyWord: string;
}

@Table({ tableName: 'categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
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

  @BelongsToMany(() => Product, () => ProductCategory)
  products: Product[];
}
