import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { initialState } from './state';
import { ProductsType } from './state';

interface ActionType {
  type: string,
  payload: ProductsType[]
}


function Reducer(state = initialState, action:ActionType) {
  switch (action.type) {
    case 'PRODUCTS_API_ACTION':
      return { ...state, products: action.payload }
    case 'SHOP_PRODUCTS_API_ACTION':
      return { ...state, shopProducts: action.payload }
    default:
      return state
  }
}


const store = createStore(Reducer,applyMiddleware(thunk))

export default store