export const productsApiAction = <payloadType>(data:payloadType):{type: string, payload: payloadType} => {
    return {
       type: "PRODUCTS_API_ACTION",
       payload: data
     }
 }