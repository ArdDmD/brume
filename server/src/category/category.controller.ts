import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('api/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post('/create')
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }
  @Patch('/update')
  update(@Body() dto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(dto);
  }
  @Get('/')
  getAll() {
    return this.categoryService.getAllCategories();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.categoryService.deleteCategoryById(id);
  }
}
