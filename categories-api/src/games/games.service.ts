import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private repo: Repository<Game>,
  ) {}

  // ✅ CREAR
  create(data: Partial<Game>) {
    const game = this.repo.create(data);
    return this.repo.save(game);
  }

  // ✅ LISTAR TODOS
  findAll() {
    return this.repo.find();
  }

  // ✅ BUSCAR POR ID
  async findOne(id: number) {
    const game = await this.repo.findOneBy({ id });

    if (!game) {
      throw new NotFoundException('Juego no encontrado');
    }

    return game;
  }

  // ✅ ACTUALIZAR
  async update(id: number, data: Partial<Game>) {
    const game = await this.findOne(id);

    Object.assign(game, data);
    return this.repo.save(game);
  }

  // ✅ ELIMINAR
  async remove(id: number) {
    const game = await this.findOne(id);

    await this.repo.remove(game);
    return { message: 'Juego eliminado' };
  }

  // 🔥 SEED (solo usar una vez)
  async seedGames() {
    const games = [
      {
        nombre: 'GTA V',
        descripcion: 'Mundo abierto',
        precio: 50,
        imagen_url: 'url',
        categoria: 'Acción',
      },
      {
        nombre: 'FIFA 24',
        descripcion: 'Fútbol',
        precio: 60,
        imagen_url: 'url',
        categoria: 'Deportes',
      },
      {
        nombre: 'Minecraft',
        descripcion: 'Sandbox',
        precio: 30,
        imagen_url: 'url',
        categoria: 'Aventura',
      },
    ];

    await this.repo.save(games);

    return { message: 'Juegos creados' };
  }
}