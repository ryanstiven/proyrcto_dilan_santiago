import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class Category {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Electronics', description: 'Name of the category' })
  @Column()
  name!: string;

  @ApiProperty({ example: 'Electronic devices and accessories', description: 'Category description' })
  @Column()
  description!: string;

  @ApiProperty({ example: true, description: 'Whether the category is active' })
  @Column()
  active!: boolean;
}
