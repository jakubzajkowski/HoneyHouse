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
 export const userDataAuthAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
   return {
      type: "USER_DATA_AUTH_ACTION",
      payload: data
    }
 }
 export const cartDataAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
   return {
      type: "CART_DATA_ACTION",
      payload: data
    }
 }
 export const cartSubtotalAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
   return {
      type: "CART_SUBTOTAL_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoFirstNameAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_FIRST_NAME_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoLastNameAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_LAST_NAME_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoEmailAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_EMAIL_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoCountryAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_COUNTRY_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoAddressAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_ADDRESS_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoApartamentAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_APARTAMENT_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoPostalCodeAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_POSTAL_CODE_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoCityAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_CITY_ACTION",
      payload: data
    }
 }
 export const formDataUserInfoPhoneAction = (data:string):{type: string, payload: string} => {
   return {
      type: "FORM_DATA_USER_INFO_PHONE_ACTION",
      payload: data
    }
 }