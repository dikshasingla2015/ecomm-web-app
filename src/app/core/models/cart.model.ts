import { ProductModel } from "./product.model";

export interface Cart{
    product:ProductModel,
    quantity:number
}