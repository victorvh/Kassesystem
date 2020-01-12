import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ean: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: number;
}

export default Product;
