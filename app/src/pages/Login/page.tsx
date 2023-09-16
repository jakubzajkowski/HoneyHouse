import React,{useState} from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,LoginHeader,LoginButton,LoginInput,LoginForm } from './styles'
import { Link } from 'react-router-dom'
import { LoginHandler } from '../../handlers/LoginHandler'
import { useSelector,useDispatch } from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { formDataLoginEmailAction,formDataLoginPasswordAction } from '../../Redux/Actions'

const Login:React.FC = () => {
  const dispatch = useDispatch()
  const [serverError,setServerError]=useState('')
  const loginData = useSelector((state:InitialStateType)=>state.formDataLogin)

  const handleSubmit=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void=>{
    e.preventDefault()
    if (loginData.email!='' && loginData.password!=''){
      LoginHandler(loginData,setServerError)
    }
  }
  return (<Main> 
        <Nav />
        <LoginHeader>Login</LoginHeader>
        <LoginForm>
            <LoginInput placeholder='Email' onChange={(e)=>dispatch(formDataLoginEmailAction(e.target.value))}/>
            <LoginInput placeholder='Password' onChange={(e)=>dispatch(formDataLoginPasswordAction(e.target.value))}/>
            {serverError && <p style={{color:'red',fontSize:'0.8rem'}}>{serverError}</p>}
            <LoginButton onClick={(e)=>handleSubmit(e)}>sign in</LoginButton>
            <Link to='/register' style={{color:'black',display:'block'}}>Create Account</Link>
        </LoginForm>
    </Main>
  )
}

export default Login