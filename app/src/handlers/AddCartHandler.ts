import axios from "axios";

export interface AddCartHandlerArgs {
    userId: string | undefined
    product_category: string
    product_id: string
    price: number
}

export const AddCartHandler = (data : AddCartHandlerArgs):void =>{
    axios.post(`${import.meta.env.VITE_HOST_URI}/api/add-cart`,{
        userId:data.userId,
        product_category: data.product_category,
        price: data.price,
        product_id: data.product_id
    }).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}