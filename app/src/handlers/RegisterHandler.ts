import axios from "axios";

export interface RegisterHandlerArgs {
    first_name: string
    last_name: string
    email: string
    password: string
}

export const RegisterHandler = (data : RegisterHandlerArgs,setServerError:React.Dispatch<React.SetStateAction<string>>):void =>{
    axios.post(`${import.meta.env.VITE_HOST_URI}/api/register`,{
        last_name: data.last_name,
        first_name: data.first_name,
        email:data.email,
        password: data.password
    }).then(({data})=>{
        console.log(data)
        location.href='/login'
    }).catch((err)=>{
        setServerError(err.response.data.error)
    })
}