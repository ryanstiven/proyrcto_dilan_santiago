import { GamesService } from './games.service';
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    create(data: any): Promise<import("./game.entity").Game>;
    findAll(): Promise<import("./game.entity").Game[]>;
    findOne(id: string): Promise<import("./game.entity").Game>;
    update(id: string, data: any): Promise<import("./game.entity").Game>;
    remove(id: string): Promise<{
        message: string;
    }>;
    seed(): Promise<{
        message: string;
    }>;
}
