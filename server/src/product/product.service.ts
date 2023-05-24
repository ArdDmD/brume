import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateColorDto } from '../color/dto/create-color.dto';
import { UpdateColorDto } from '../color/dto/update-color.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationService } from '../pagination/pagination.service';
import { Op } from 'sequelize';
import { FiltersService } from '../filters/filters.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private paginationService: PaginationService,
    private filtersService: FiltersService,
  ) {}

  async createProduct(dto: CreateProductDto) {
    return await this.productRepository.create({
      ...dto,
    });
  }

  async updateProduct(dto: UpdateProductDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.productRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllProducts() {
    const products = await this.productRepository.findAll();
    return products;
  }

  async getProducts(dto) {
    const { offset, limit } = this.paginationService.getPagination(dto);
    console.log(offset, limit);
    let filters = {};
    filters = this.filtersService.getFilters(
      dto.searchValue ? JSON.parse(dto.searchValue) : null,
    );
    console.log('dadadadadadadada', filters);
    // if (dto.name) {
    //   filters = {
    //     name: {
    //       [Op.like]: `%${dto.name}%`,
    //     },
    //     description: {
    //       [Op.like]: `%${dto.name}%`,
    //     },
    //   };
    // }
    if (dto.category) {
      filters = {
        ...filters,
        categories: {
          keyWord: {
            [Op.like]: dto.category,
          },
        },
      };
    }
    if (dto.color) {
      filters = {
        ...filters,
        colors: {
          keyWord: {
            [Op.like]: dto.color,
          },
        },
      };
    }
    if (dto.size) {
      filters = {
        ...filters,
        size: {
          keyWord: {
            [Op.like]: dto.color,
          },
        },
      };
    }
    const where =
      Object.keys(filters).length > 0
        ? {
            [Op.or]: {
              ...filters,
            },
          }
        : {};

    const products = await this.productRepository.findAndCountAll({
      offset,
      limit,
      where,
    });
    return products;
  }

  async getProductById(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }

  async deleteProductById(id: number) {
    await this.productRepository.destroy({
      where: { id },
    });
  }
}
