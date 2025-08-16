export class Product {
  id!: number;
  name!: string;
  price!: number;
  descripcion!: string;
  category!: {
    id: number;
    name: string;
  };
}