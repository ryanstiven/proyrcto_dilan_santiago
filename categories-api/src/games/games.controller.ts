import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@UseGuards(JwtAuthGuard) // 🔐 PROTEGE TODO
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Post()
  create(@Body() data: any) {
    return this.gamesService.create(data);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.gamesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(Number(id));
  }

  @Post('seed')
  seed() {
    return this.gamesService.seedGames();
  }
}