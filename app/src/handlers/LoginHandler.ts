import axios from "axios";

export interface LoginHandlerArgs {
    email: string
    password: string
}

export const LoginHandler = (data : LoginHandlerArgs,setServerError:React.Dispatch<React.SetStateAction<string>>):void =>{
    axios.post(`http://127.0.0.1:3000/api/login`,{
        email:data.email,
        password: data.password
    }).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        setServerError(err.response.data.error)
    })
}