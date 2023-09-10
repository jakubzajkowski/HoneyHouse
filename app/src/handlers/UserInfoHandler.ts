import axios from "axios";

export interface UserInfoHandlerArgs {
    first_name: string
    last_name: string
    email: string
    country: string
    address: string
    apartament: string
    postal_code: string
    city: string
    phone: string
}

export const UserInfoHandler = (data : UserInfoHandlerArgs):void =>{
    axios.post(`${import.meta.env.VITE_HOST_URI}/api/user-info`,{
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        country: data.country,
        address: data.address,
        apartament: data.apartament,
        postal_code: data.postal_code,
        city: data.city,
        phone: data.phone,
    }).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}