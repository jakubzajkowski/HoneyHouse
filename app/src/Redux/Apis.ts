import axios from "axios";
import { testThunk } from "./Actions";
import { AnyAction,Dispatch } from "redux";

export const fetchTestData=(dispatch:Dispatch<AnyAction>):any=>{
    return axios.get("http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json")
      .then(({ data }) => {
      dispatch(testThunk(data));
    });
}