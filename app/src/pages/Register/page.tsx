import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,RegisterHeader,RegisterButton,RegisterInput,RegisterForm } from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { RegisterHandler,RegisterHandlerArgs } from '../../handlers/RegisterHandler'
import { formDataRegisterEmailAction,
  formDataRegisterPasswordAction,
  formDataRegisterFirstNameAction,
  formDataRegisterLastNameAction
} from '../../Redux/Actions'
import { InitialStateType } from '../../Redux/state'

const Register:React.FC = () => {
  const dispatch = useDispatch()
  const registerData = useSelector((state:InitialStateType)=>state.formDataRegister)

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
      e.preventDefault()
      RegisterHandler(registerData as RegisterHandlerArgs)
  }

  return (<Main> 
        <Nav />
        <RegisterHeader>Create Account</RegisterHeader>
        <RegisterForm >
            <RegisterInput placeholder='First name' onChange={(e)=>dispatch(formDataRegisterFirstNameAction(e.target.value))}/>
            <RegisterInput placeholder='Last name' onChange={(e)=>dispatch(formDataRegisterLastNameAction(e.target.value))}/>
            <RegisterInput placeholder='Email' onChange={(e)=>dispatch(formDataRegisterEmailAction(e.target.value))}/>
            <RegisterInput placeholder='Password' onChange={(e)=>dispatch(formDataRegisterPasswordAction(e.target.value))}/>
            <RegisterButton onClick={(e)=>handleSubmit(e)}>create</RegisterButton>
        </RegisterForm>
    </Main>
  )
}

export default Register