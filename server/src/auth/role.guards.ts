import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './role-auth.decorator';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class RoleGuards implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }

      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0]; //type
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'нету прав чел' });
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      console.log('daaaaa', user, requiredRoles);
      return user.roles.some((role) => requiredRoles.includes(role.keyWord));
    } catch (e) {
      console.log(e);
      throw new HttpException('нету прав чел', HttpStatus.FORBIDDEN);
    }
  }
}
