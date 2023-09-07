import axios from "axios";

export interface DeleteCartHandlerArgs {
    userId: string 
    product_category: string
    product_id: string
    price: number
}

export const DeleteCartHandler = (id:string):void =>{
    axios.post(`${import.meta.env.VITE_HOST_URI}/api/delete-cart`,{
       id:id
    }).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}