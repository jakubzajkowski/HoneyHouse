import { ProductsType } from "../Redux/state"
import { FetchProductsDataSortedArg } from "../Redux/Apis"
export const sortRules = (a:ProductsType,b:ProductsType,sorted:FetchProductsDataSortedArg) =>{
    switch(sorted.type){
      case 'priceAsc': 
        return (a.price<b.price) ? -1 : 1
      case 'priceDesc': 
        return (a.price<b.price) ? 1 : -1
      case 'nameDesc': 
        return (a.name<b.name) ? 1 : -1
      case 'nameAsc': 
        return (a.name<b.name) ? -1 : 1
      case 'weightAsc': 
        return (a.weight<b.weight) ? -1 : 1
      case 'weightDesc': 
        return (a.weight<b.weight) ? 1 : -1
      default: 
        return 0
    } 
  }