import axios from "axios";
import { productsApiAction } from "./Actions";
import { AnyAction,Dispatch } from "redux";
import { ProductsType } from "./state";

export const fetchProductsData=(dispatch:Dispatch<AnyAction>):any=>{
    return axios.get("http://127.0.0.1:3000/api/products")
      .then(({ data }) => {
      dispatch(productsApiAction<ProductsType[]>(data));
    });
}