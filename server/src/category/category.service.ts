import { Category } from './category.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    return await this.categoryRepository.create({
      ...dto,
    });
  }

  async updateCategory(dto: UpdateCategoryDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.categoryRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllCategories() {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }
  async getCategoryById(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    return category;
  }
  async deleteCategoryById(id: number) {
    await this.categoryRepository.destroy({
      where: { id },
    });
  }
}
