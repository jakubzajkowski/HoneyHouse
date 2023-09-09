import axios from "axios";
import { productsApiAction,shopProductsApiAction,productApiAction,userDataAuthAction,cartSubtotalAction } from "./Actions";
import { AnyAction,Dispatch } from "redux";
import { ProductsType,UserDataType,CartDataType } from "./state";
import { cartDataAction } from "./Actions";

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
export const fetchUserAuth=(token:string,dispatch:Dispatch<AnyAction>,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/user`,{headers: { Authorization: `Bearer ${token}` }})
    .then(({ data }) => {
    dispatch(userDataAuthAction<UserDataType>(data));
    setIsLoading(false)
  }).catch(()=>setIsLoading(false))
}
export const fetchCart=(id:string | undefined,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/cart/${id}`)
    .then(({ data }) => {
    dispatch(cartDataAction<CartDataType[]>(data));
  }).catch()
}
export const fetchCartSubtotal=(id:string | undefined,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/cart/${id}`)
    .then(({ data }) => {
      let subtotalPrice:number=0
      data.forEach((x:any)=>subtotalPrice+=x.price)
    dispatch(cartSubtotalAction<number>(subtotalPrice));
  }).catch()
}