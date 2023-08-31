import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,LoginHeader,LoginButton,LoginInput,LoginForm } from './styles'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
  return (<Main> 
        <Nav />
        <LoginHeader>Login</LoginHeader>
        <LoginForm>
            <LoginInput placeholder='Email'/>
            <LoginInput placeholder='Password'/>
            <LoginButton>sign in</LoginButton>
            <Link to='/register' style={{color:'black',display:'block'}}>Create Account</Link>
        </LoginForm>
    </Main>
  )
}

export default Login