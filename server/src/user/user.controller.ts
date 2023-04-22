import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
// import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.model';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { Roles } from '../auth/role-auth.decorator';
// import { RoleGuards } from '../auth/role.guards';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
// import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('create')
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }
}
