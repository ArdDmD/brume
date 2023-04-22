import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Size } from './size.model';

import { UpdateSizeDto } from './dto/update-size.dto';
import { CreateSizeDto } from './dto/create-size.dto';

@Injectable()
export class SizeService {
  constructor(@InjectModel(Size) private sizeRepository: typeof Size) {}

  async createSize(dto: CreateSizeDto) {
    return await this.sizeRepository.create({
      ...dto,
    });
  }

  async updateSize(dto: UpdateSizeDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.sizeRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllSizes() {
    const sizes = await this.sizeRepository.findAll();
    return sizes;
  }

  async getSizeById(id: number) {
    const size = await this.sizeRepository.findOne({
      where: { id },
    });
    return size;
  }

  async deleteSizeById(id: number) {
    await this.sizeRepository.destroy({
      where: { id },
    });
  }
}
