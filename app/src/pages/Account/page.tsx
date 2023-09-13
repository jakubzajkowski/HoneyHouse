import React from 'react'
import { Main,
  AccountInfoBar,
  AccountSendInfo,
  AccountContainer,
  FormInfo,InfoButton,
  InfoInput,InputContainer,
  InfoDoubleInput } from './styles'
import Nav from '../../components/Nav/Nav'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { formDataUserInfoFirstNameAction,
  formDataUserInfoLastNameAction,
  formDataUserInfoEmailAction,
  formDataUserInfoAddressAction,
  formDataUserInfoApartamentAction,
  formDataUserInfoCityAction,
  formDataUserInfoCountryAction,
  formDataUserInfoPhoneAction,
  formDataUserInfoPostalCodeAction } from '../../Redux/Actions'
import { UserInfoHandler} from '../../handlers/UserInfoHandler'

const Account:React.FC = () => {
  const {data,isLoading}=useAuth()
  const formData = useSelector((state:InitialStateType)=>state.formDataUserInfo)
  const dispatch = useDispatch()

  const handleSubmit=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void=>{
    e.preventDefault()
    console.log(formData)
    UserInfoHandler(formData)
  }

  if (isLoading && !data) return <div>Loading...</div>

  if (data) return (
    <Main>
      <Nav />
      <AccountContainer>
        <AccountInfoBar>
          <h1>{data.first_name} {data.last_name}</h1>
          <p style={{margin: '1rem 0'}}>{data.email}</p>
          <p style={{margin: '1rem 0'}}>created at: {data.createdAt.slice(0,10)}</p>
          <h1 style={{margin: '1rem 0'}}>Your Products: </h1>
          <p style={{color:'grey',margin: '1rem 0'}}>No products!</p>
        </AccountInfoBar>
        <AccountSendInfo>
          <h3>Contact: </h3>
          <FormInfo>
            <InfoInput placeholder={data.email ? data.email : 'Email'} onChange={(e)=>dispatch(formDataUserInfoEmailAction(e.target.value))}  />
            <InfoInput placeholder={data.country ? data.country : 'Country'} onChange={(e)=>dispatch(formDataUserInfoCountryAction(e.target.value))} />
            <InputContainer>
              <InfoDoubleInput placeholder={data.first_name ? data.first_name : 'First Name'} onChange={(e)=>dispatch(formDataUserInfoFirstNameAction(e.target.value))} />
              <InfoDoubleInput placeholder={data.last_name ? data.last_name : 'Last Name'} onChange={(e)=>dispatch(formDataUserInfoLastNameAction(e.target.value))} />
            </InputContainer>
            <InfoInput placeholder={data.address ? data.address : 'Address'} onChange={(e)=>dispatch(formDataUserInfoAddressAction(e.target.value))} />
            <InfoInput placeholder={data.apartament ? data.apartament : 'Apartament'} onChange={(e)=>dispatch(formDataUserInfoApartamentAction(e.target.value))} />
            <InputContainer>
              <InfoDoubleInput placeholder={data.postal_code ? data.postal_code : 'Postal Code'} onChange={(e)=>dispatch(formDataUserInfoPostalCodeAction(e.target.value))} />
              <InfoDoubleInput placeholder={data.city ? data.city : 'City'} onChange={(e)=>dispatch(formDataUserInfoCityAction(e.target.value))} />
            </InputContainer>
            <InfoInput placeholder={data.phone ? data.phone : 'Phone Number'} onChange={(e)=>dispatch(formDataUserInfoPhoneAction(e.target.value))} />
            <InfoButton onClick={(e)=>handleSubmit(e)}>Accept</InfoButton>
          </FormInfo>
        </AccountSendInfo>
      </AccountContainer>
    </Main>
  )
  else return <Navigate to="/login" replace />
}

export default Account