import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoriesService {
    private repo;
    constructor(repo: Repository<Category>);
    create(name: string): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category | null>;
    update(id: number, name: string): Promise<Category | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
