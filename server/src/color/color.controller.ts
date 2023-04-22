import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { UpdateColorDto } from './dto/update-color.dto';
import { CreateColorDto } from './dto/create-color.dto';
import * as Path from 'path';

@Controller('color')
export class ColorController {
  constructor(private colorService: ColorService) {}
  @Post('/create')
  create(@Body() dto: CreateColorDto) {
    return this.colorService.createColor(dto);
  }
  @Patch('/update')
  update(@Body() dto: UpdateColorDto) {
    return this.colorService.updateColor(dto);
  }
  @Get('/all')
  getAll() {
    return this.colorService.getAllColors();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.colorService.getColorById(id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.colorService.deleteColorById(id);
  }
}
