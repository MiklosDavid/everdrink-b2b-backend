import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async readAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async update(product: Product): Promise<UpdateResult> {
    return await this.productRepository.update(product.id, product);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
