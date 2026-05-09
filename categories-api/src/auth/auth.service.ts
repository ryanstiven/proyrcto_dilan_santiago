import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(data: any) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.usersService.create({
      ...data,
      password: hash,
    });
  }

  async login(data: any) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new Error('Usuario no existe');
    }

    const valid = await bcrypt.compare(data.password, user.password);

    if (!valid) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      'secret',
      { expiresIn: '1h' },
    );

    return { token };
  }
}