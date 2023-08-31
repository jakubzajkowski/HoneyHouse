import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,RegisterHeader,RegisterButton,RegisterInput,RegisterForm } from './styles'

const Register:React.FC = () => {
  return (<Main> 
        <Nav />
        <RegisterHeader>Create Account</RegisterHeader>
        <RegisterForm>
            <RegisterInput placeholder='First name'/>
            <RegisterInput placeholder='Last name'/>
            <RegisterInput placeholder='Email'/>
            <RegisterInput placeholder='Password'/>
            <RegisterButton>create</RegisterButton>
        </RegisterForm>
    </Main>
  )
}

export default Register