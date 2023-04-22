import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.model';
import { ProductFiles } from '../product/product-files.model';

interface FilesCreationAttrs {
  name: string;
  url: string;
  mime: string;
}

@Table({ tableName: 'files' })
export class Files extends Model<Files, FilesCreationAttrs> {
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
  url: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mime: string;

  @BelongsToMany(() => Product, () => ProductFiles)
  product: Product[];
}
