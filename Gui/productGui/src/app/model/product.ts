import { Category } from "./category";

export interface Product{
  id:number;
  designation:string;
  price:number;
  quantity:number;
  category:Category;

}
