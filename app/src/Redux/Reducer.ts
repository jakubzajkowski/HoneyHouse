import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { initialState,ProductsType,InitialStateType } from './state';

interface ActionType {
  type: string,
  payload: ProductsType[] | ProductsType  | string
}

const Reducer = (state = initialState, action:ActionType) : InitialStateType => {
  switch (action.type) {
    case 'PRODUCTS_API_ACTION':
      return { ...state, products: action.payload as ProductsType[] }
    case 'SHOP_PRODUCTS_API_ACTION':
      return { ...state, shopProducts: action.payload as ProductsType[] }
    case 'PRODUCT_API_ACTION':
      return { ...state, product: action.payload as ProductsType }
    case 'FORM_DATA_REGISTER_EMAIL_ACTION':
      return { ...state, formDataRegister: {...state.formDataRegister, email: action.payload as string}}
    case 'FORM_DATA_REGISTER_PASSWORD_ACTION':
      return { ...state, formDataRegister: {...state.formDataRegister, password: action.payload as string}}
    case 'FORM_DATA_REGISTER_LAST_NAME_ACTION':
      return { ...state, formDataRegister: {...state.formDataRegister, last_name: action.payload as string}}
    case 'FORM_DATA_REGISTER_FIRST_NAME_ACTION':
      return { ...state, formDataRegister: {...state.formDataRegister, first_name: action.payload as string}}
    case 'FORM_DATA_LOGIN_EMAIL_ACTION':
      return { ...state, formDataLogin: {...state.formDataLogin, email: action.payload as string}}
    case 'FORM_DATA_LOGIN_PASSWORD_ACTION':
      return { ...state, formDataLogin: {...state.formDataLogin, password: action.payload as string}}
    default:
      return state
  }
}


const store = createStore(Reducer,applyMiddleware(thunk))

export default store