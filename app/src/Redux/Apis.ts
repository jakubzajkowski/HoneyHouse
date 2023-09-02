import axios from "axios";
import { productsApiAction,shopProductsApiAction,productApiAction } from "./Actions";
import { AnyAction,Dispatch } from "redux";
import { ProductsType } from "./state";

export const fetchProductsData=(dispatch:Dispatch<AnyAction>):any=>{
    return axios.get(`${import.meta.env.VITE_HOST_URI}/api/products`)
      .then(({ data }) => {
      dispatch(productsApiAction<ProductsType[]>(data));
    });
}
export const fetchShopProductsData=(category:string,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/products/${category}`)
    .then(({ data }) => {
    dispatch(shopProductsApiAction<ProductsType[]>(data));
  });
}
export const fetchProductData=(id:string,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/product/${id}`)
    .then(({ data }) => {
    dispatch(productApiAction<ProductsType>(data));
  });
}