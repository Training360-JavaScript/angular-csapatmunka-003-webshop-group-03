export class Product {
  [key: string]: any;
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;
}
