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