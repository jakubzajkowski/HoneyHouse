import axios from "axios";

export interface CheckoutHandlerArgs {
    desc: string
    id: string
    img: string
    name: string
    price: number
    product_category:string
    product_id: string
    userId: string
    weight: number
}


export const CheckoutHandler = (data:CheckoutHandlerArgs[]):void =>{
    axios.post(`${import.meta.env.VITE_HOST_URI}/api/checkout`,{
        data: data
    }).then(({data})=>{
        location.href=data.url
    }).catch((err)=>{console.log(err)})
}