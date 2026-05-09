import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(data: any): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
}
