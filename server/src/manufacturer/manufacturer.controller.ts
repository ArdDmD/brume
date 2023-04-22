import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private manufacturerService: ManufacturerService) {}
  @Post('/create')
  create(@Body() dto: CreateManufacturerDto) {
    return this.manufacturerService.createManufacturer(dto);
  }
  @Patch('/update')
  update(@Body() dto: UpdateManufacturerDto) {
    return this.manufacturerService.updateManufacturer(dto);
  }
  @Get('/all')
  getAll() {
    return this.manufacturerService.getAllManufacturers();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.manufacturerService.getManufacturerById(id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.manufacturerService.deleteManufacturerById(id);
  }
}
