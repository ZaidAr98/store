
export type ProductData = {
    id:string;
    name:string;
    description:string;
    price:String;
    imageUrls:string;
    stock:String;
    createdAt: string;
    updatedAt: string
  };




export interface NavItem {
  id:number;
  title:JSX.Element;
  col:string;
  padding:string
}