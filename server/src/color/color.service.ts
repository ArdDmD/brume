import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from './color.model';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorService {
  constructor(@InjectModel(Color) private colorRepository: typeof Color) {}

  async createColor(dto: CreateColorDto) {
    return await this.colorRepository.create({
      ...dto,
    });
  }

  async updateColor(dto: UpdateColorDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.colorRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllColors() {
    const colors = await this.colorRepository.findAll();
    return colors;
  }

  async getColorById(id: number) {
    const color = await this.colorRepository.findOne({ where: { id } });
    return color;
  }

  async deleteColorById(id: number) {
    await this.colorRepository.destroy({
      where: { id },
    });
  }
}
