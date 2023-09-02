import axios from "axios";

export interface RegisterHandlerArgs {
    first_name: string
    last_name: string
    email: string
    password: string
}

export const RegisterHandler = (data : RegisterHandlerArgs,setServerError:React.Dispatch<React.SetStateAction<string>>):void =>{
    console.log(data)
    axios.post(`http://127.0.0.1:3000/api/register`,{
        last_name: data.last_name,
        first_name: data.first_name,
        email:data.email,
        password: data.password
    }).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        setServerError(err.response.data.error)
    })
}