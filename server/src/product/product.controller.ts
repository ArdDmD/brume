import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  create(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }
  @Patch('/update')
  update(@Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(dto);
  }
  @Get('/all')
  getAll() {
    return this.productService.getAllProducts();
  }
  @Get('')
  get(@Query() query) {
    return this.productService.getProducts(query);
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.productService.deleteProductById(id);
  }
}
