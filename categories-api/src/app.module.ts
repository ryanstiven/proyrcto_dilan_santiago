import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { GamesModule } from './games/games.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { Game } from './games/game.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,

      entities: [Game, User],

      synchronize: true,

      ssl: {
        rejectUnauthorized: false,
      },
    }),

    GamesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}