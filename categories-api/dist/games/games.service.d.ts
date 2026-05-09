import { Repository } from 'typeorm';
import { Game } from './game.entity';
export declare class GamesService {
    private repo;
    constructor(repo: Repository<Game>);
    create(data: Partial<Game>): Promise<Game>;
    findAll(): Promise<Game[]>;
    findOne(id: number): Promise<Game>;
    update(id: number, data: Partial<Game>): Promise<Game>;
    remove(id: number): Promise<{
        message: string;
    }>;
    seedGames(): Promise<{
        message: string;
    }>;
}
