import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role)
    private roleRepository: typeof Role,
  ) {}

  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.create({
      ...dto,
    });
  }

  async updateRole(dto: UpdateRoleDto) {
    if (!dto.id) {
      return new HttpException('Укажите id', HttpStatus.NOT_MODIFIED);
    }
    return await this.roleRepository.update(
      {
        ...dto,
      },
      { where: { id: dto.id } },
    );
  }

  async getAllRoles() {
    const roles = await this.roleRepository.findAll();
    return roles;
  }

  async getRoleById(id: number) {
    const role = await this.roleRepository.findOne({
      where: { id },
    });
    return role;
  }

  async getRoleByKeyWor(keyWord: string) {
    const role = await this.roleRepository.findOne({
      where: { keyWord },
    });
    return role;
  }

  async deleteRoleById(id: number) {
    await this.roleRepository.destroy({
      where: { id },
    });
  }
}
