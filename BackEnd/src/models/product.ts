
export interface ProductData {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    createdAt: Date

  }
  

  export interface UpdateProductData {
    id:string,
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    createdAt: Date
  }