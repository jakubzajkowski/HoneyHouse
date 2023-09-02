import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,RegisterHeader,RegisterButton,RegisterInput,RegisterForm } from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { RegisterHandler,RegisterHandlerArgs } from '../../handlers/RegisterHandler'
import { formDataRegisterEmailAction,
  formDataRegisterPasswordAction,
  formDataRegisterFirstNameAction,
  formDataRegisterLastNameAction
} from '../../Redux/Actions'
import useValidator from './hooks/useValidator'
import { InitialStateType } from '../../Redux/state'

const Register:React.FC = () => {
  const dispatch = useDispatch()
  const [serverError,setServerError]=useState('')
  const registerData = useSelector((state:InitialStateType)=>state.formDataRegister)
  const {errors,isValidate,checkErrors}=useValidator(registerData?.first_name as string,registerData?.last_name as string,registerData?.email as string,registerData?.password as string)

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
      e.preventDefault()
      checkErrors()
      if (isValidate()){
        RegisterHandler(registerData as RegisterHandlerArgs,setServerError)
      }
  }

  return (<Main> 
        <Nav />
        <RegisterHeader>Create Account</RegisterHeader>
        <RegisterForm >
            <RegisterInput placeholder='First name' onChange={(e)=>dispatch(formDataRegisterFirstNameAction(e.target.value))}/>
            {errors.lastNameErr && <p style={{fontSize:'0.8rem',color:'red'}}>{errors.lastNameErr}</p>}
            <RegisterInput placeholder='Last name' onChange={(e)=>dispatch(formDataRegisterLastNameAction(e.target.value))}/>
            {errors.lastNameErr && <p style={{fontSize:'0.8rem',color:'red'}}>{errors.lastNameErr}</p>}
            <RegisterInput placeholder='Email' onChange={(e)=>dispatch(formDataRegisterEmailAction(e.target.value))}/>
            {errors.emailErr && <p style={{fontSize:'0.8rem',color:'red'}}>{errors.emailErr}</p>}
            {serverError && <p style={{fontSize:'0.8rem',color:'red'}}>{serverError}</p>}
            <RegisterInput placeholder='Password' onChange={(e)=>dispatch(formDataRegisterPasswordAction(e.target.value))}/>
            {errors.passwordErr && <p style={{fontSize:'0.8rem',color:'red'}}>{errors.passwordErr}</p>}
            <RegisterButton onClick={(e)=>handleSubmit(e)}>create</RegisterButton>
        </RegisterForm>
    </Main>
  )
}

export default Register