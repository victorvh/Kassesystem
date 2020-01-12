import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import Product from "./Product";

@Entity("purchases")
class Purchase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  price: number;

  @ManyToMany(type => Product)
  @JoinTable()
  products: Product[];
}

export default Purchase;
