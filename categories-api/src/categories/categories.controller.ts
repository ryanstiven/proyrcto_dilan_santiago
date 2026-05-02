import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully.',
    type: Category,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body('name') name: string) {
    return this.service.create(name);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all categories' })
  @ApiResponse({
    status: 200,
    description: 'List of categories returned.',
    type: [Category],
  })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a category by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category found.', type: Category })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  findOne(@Param('id') id: number) {
    return this.service.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a category by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Category ID' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully.',
    type: Category,
  })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  update(@Param('id') id: number, @Body('name') name: string) {
    return this.service.update(Number(id), name);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
