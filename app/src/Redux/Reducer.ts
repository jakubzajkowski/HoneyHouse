import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { initialState } from './state';
import { ProductsType } from './state';

interface ActionType {
  type: string,
  payload: ProductsType[]
}


function counterReducer(state = initialState, action:ActionType) {
  switch (action.type) {
    case 'PRODUCTS_API_ACTION':
      return { ...state, products: action.payload }
    default:
      return state
  }
}


const store = createStore(counterReducer,applyMiddleware(thunk))

export default store