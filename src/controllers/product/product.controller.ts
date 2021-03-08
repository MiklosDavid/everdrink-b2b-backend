import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('list')
  read(): Promise<Product[]> {
    return this.productService.readAll();
  }

  @Post('create')
  async create(@Body() product: Product): Promise<any> {
    return this.productService.create(product);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() product: Product): Promise<any> {
    product.id = Number(id);
    return this.productService.update(product);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.productService.delete(id);
  }
}
