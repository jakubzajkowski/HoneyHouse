import React from 'react'
import { Main,AccountInfoBar,AccountSendInfo,AccountContainer,FormInfo,InfoButton,InfoInput,InputContainer,InfoDoubleInput } from './styles'
import Nav from '../../components/Nav/Nav'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Account:React.FC = () => {
  const {data,isLoading}=useAuth()

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
            <InfoInput placeholder='Email' defaultValue={data.email && data.email} type='email' />
            <InfoInput placeholder='Country' defaultValue={data.country && data.country}/>
            <InputContainer>
              <InfoDoubleInput placeholder='First Name' defaultValue={data.first_name && data.first_name}/>
              <InfoDoubleInput placeholder='Last Name' defaultValue={data.last_name && data.last_name}/>
            </InputContainer>
            <InfoInput placeholder='Address' defaultValue={data.address && data.address}/>
            <InfoInput placeholder='Apartament' defaultValue={data.apartament && data.apartament}/>
            <InputContainer>
              <InfoDoubleInput placeholder='Postal Code' defaultValue={data.postal_code && data.postal_code}/>
              <InfoDoubleInput placeholder='City' defaultValue={data.city && data.city}/>
            </InputContainer>
            <InfoInput placeholder='Phone Number' type='number' defaultValue={data.phone && data.phone}/>
            <InfoButton>Accept</InfoButton>
          </FormInfo>
        </AccountSendInfo>
      </AccountContainer>
    </Main>
  )
  else return <Navigate to="/login" replace />
}

export default Account