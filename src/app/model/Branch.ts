import { ProductStock } from "./productoStock";

export class Branch {
  id!: string;
  name!: string;
  city!: string;
  stock!: ProductStock[];
}