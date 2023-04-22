import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateColorDto } from '../color/dto/create-color.dto';
import { UpdateColorDto } from '../color/dto/update-color.dto';

@Controller('size')
export class SizeController {
  constructor(private sizeService: SizeService) {}

  @Post('/create')
  create(@Body() dto: CreateColorDto) {
    return this.sizeService.createSize(dto);
  }
  @Patch('/update')
  update(@Body() dto: UpdateColorDto) {
    return this.sizeService.updateSize(dto);
  }
  @Get('/all')
  getAll() {
    return this.sizeService.getAllSizes();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.sizeService.getSizeById(id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.sizeService.deleteSizeById(id);
  }
}
