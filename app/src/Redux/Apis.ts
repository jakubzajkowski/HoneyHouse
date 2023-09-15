import axios from "axios";
import { productsApiAction,shopProductsApiAction,productApiAction,userDataAuthAction,cartSubtotalAction } from "./Actions";
import { AnyAction,Dispatch } from "redux";
import { ProductsType,UserDataType,CartDataType } from "./state";
import { cartDataAction } from "./Actions";
import { sortRules } from "../utils/sortRules";

export interface FetchProductsDataSortedArg {
  sort: boolean
  type : 'priceAsc' | 'nameAsc' | 'weightAsc' | 'priceDesc' | 'nameDesc' | 'weightDesc' | 'none'
}

export const fetchProductsData=(dispatch:Dispatch<AnyAction>,sorted:FetchProductsDataSortedArg):any=>{
    return axios.get(`${import.meta.env.VITE_HOST_URI}/api/products`)
      .then(({ data }) => {
        const dataToSort: ProductsType[] = data

        dataToSort.sort((a,b)=>sortRules(a,b,sorted))
      dispatch(productsApiAction<ProductsType[]>(sorted.sort ? dataToSort : data));
    });
}
export const fetchShopProductsData=(category:string,dispatch:Dispatch<AnyAction>,sorted:FetchProductsDataSortedArg):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/products/${category}`)
    .then(({ data }) => {
      const dataToSort: ProductsType[] = data

      dataToSort.sort((a,b)=>sortRules(a,b,sorted))
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
export const fetchCart=(token:string | undefined,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/cart/`,{headers: { Authorization: `Bearer ${token}` }})
    .then(({ data }) => {
    dispatch(cartDataAction<CartDataType[]>(data));
  }).catch()
}
export const fetchCartSubtotal=(token:string | undefined,dispatch:Dispatch<AnyAction>):any=>{
  return axios.get(`${import.meta.env.VITE_HOST_URI}/api/cart/`,{headers: { Authorization: `Bearer ${token}` }})
    .then(({ data }) => {
      let subtotalPrice:number=0
      data.forEach((x:any)=>subtotalPrice+=x.price)
    dispatch(cartSubtotalAction<number>(subtotalPrice));
  }).catch()
}