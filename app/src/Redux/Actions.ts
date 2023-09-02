export const productsApiAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
    return {
       type: "PRODUCTS_API_ACTION",
       payload: data
     }
 }

 export const shopProductsApiAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
  return {
     type: "SHOP_PRODUCTS_API_ACTION",
     payload: data
   }
}
export const productApiAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
   return {
      type: "PRODUCT_API_ACTION",
      payload: data
    }
 }
export const formDataRegisterEmailAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_REGISTER_EMAIL_ACTION",
      payload: data
    }
 }
export const formDataRegisterPasswordAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_REGISTER_PASSWORD_ACTION",
      payload: data
    }
 }
export const formDataRegisterLastNameAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_REGISTER_LAST_NAME_ACTION",
      payload: data
    }
 }
export const formDataRegisterFirstNameAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_REGISTER_FIRST_NAME_ACTION",
      payload: data
    }
 }
 export const formDataLoginEmailAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_LOGIN_EMAIL_ACTION",
      payload: data
    }
 }
 export const formDataLoginPasswordAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_LOGIN_PASSWORD_ACTION",
      payload: data
    }
 }