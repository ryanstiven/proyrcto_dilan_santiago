import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private repo: Repository<Category>,
  ) {}

  create(name: string) {
    const category = this.repo.create({ name, description: '', active: true });
    return this.repo.save(category);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, name: string) {
    await this.repo.update(id, { name });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
