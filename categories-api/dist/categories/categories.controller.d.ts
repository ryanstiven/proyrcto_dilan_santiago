import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    create(name: string): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category | null>;
    update(id: number, name: string): Promise<Category | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
