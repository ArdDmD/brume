import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from '../product/product.model';

interface ManufacturerCreationAttrs {
  name: string;
}

@Table({ tableName: 'manufacturers', createdAt: false, updatedAt: false })
export class Manufacturer extends Model<
  Manufacturer,
  ManufacturerCreationAttrs
> {
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

  @HasMany(() => Product)
  product: Product[];
}
