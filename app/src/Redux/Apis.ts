import axios from "axios";
import { productsApiAction,shopProductsApiAction,productApiAction } from "./Actions";
import { AnyAction,Dispatch } from "redux";
import { ProductsType } from "./state";

export const fetchProductsData=(dispatch:Dispatch<AnyAction>):any=>{
    return axios.get("http://127.0.0.1:3000/api/products")
      .then(({ data }) => {
      dispatch(productsApiAction<ProductsType[]>(data));
    });
}
export const fetchShopProductsData=(category:string,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`http://127.0.0.1:3000/api/products/${category}`)
    .then(({ data }) => {
    dispatch(shopProductsApiAction<ProductsType[]>(data));
  });
}
export const fetchProductData=(id:string,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`http://127.0.0.1:3000/api/product/${id}`)
    .then(({ data }) => {
    dispatch(productApiAction<ProductsType>(data));
  });
}