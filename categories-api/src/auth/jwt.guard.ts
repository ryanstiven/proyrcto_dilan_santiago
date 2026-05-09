import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('No autorizado');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, 'secret');
      request.user = decoded; // 👈 guardamos el usuario
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}