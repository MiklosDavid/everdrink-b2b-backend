import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  gsku: string;

  @Column()
  quantity: string;

  @Column()
  package_type: string;

  @Column()
  volume: string;

  @Column()
  producer: string;

  @Column()
  sku: string;

  @Column()
  title: string;

  @Column()
  type: string;
}
