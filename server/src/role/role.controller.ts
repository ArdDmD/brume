import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateColorDto } from '../color/dto/create-color.dto';
import { UpdateColorDto } from '../color/dto/update-color.dto';
import { Roles } from '../auth/role-auth.decorator';
import { RoleGuards } from '../auth/role.guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RoleGuards)
  @Post('/create')
  create(@Body() dto: CreateColorDto) {
    return this.roleService.createRole(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RoleGuards)
  @Patch('/update')
  update(@Body() dto: UpdateColorDto) {
    return this.roleService.updateRole(dto);
  }
  @Get('/all')
  getAll() {
    return this.roleService.getAllRoles();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.roleService.getRoleById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RoleGuards)
  @Delete('delete/:id')
  deleteById(@Param('id') id: number) {
    return this.roleService.deleteRoleById(id);
  }
}
