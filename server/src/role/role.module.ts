import { forwardRef, Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { UserRoles } from '../user/user-role.model';
import { User } from '../user/user.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [
    SequelizeModule.forFeature([Role, UserRoles, User]),
    forwardRef(() => AuthModule),
  ],
  exports: [RoleService],
})
export class RoleModule {}
