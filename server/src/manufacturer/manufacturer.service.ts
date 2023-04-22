import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Manufacturer } from './manufacturer.model';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel(Manufacturer)
    private manufacturerRepository: typeof Manufacturer,
  ) {}

  async createManufacturer(dto: CreateManufacturerDto) {
    return await this.manufacturerRepository.create({
      ...dto,
    });
  }

  async updateManufacturer(dto: UpdateManufacturerDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.manufacturerRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllManufacturers() {
    const manufacturers = await this.manufacturerRepository.findAll();
    return manufacturers;
  }

  async getManufacturerById(id: number) {
    const manufacturer = await this.manufacturerRepository.findOne({
      where: { id },
    });
    return manufacturer;
  }

  async deleteManufacturerById(id: number) {
    await this.manufacturerRepository.destroy({
      where: { id },
    });
  }
}
