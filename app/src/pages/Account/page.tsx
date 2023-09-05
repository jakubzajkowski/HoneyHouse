import React from 'react'
import { Main,AccountInfoBar,AccountSendInfo,AccountContainer,FormInfo,InfoButton,InfoInput,InputContainer,InfoDoubleInput } from './styles'
import Nav from '../../components/Nav/Nav'
import useAuth from '../../hooks/useAuth'

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
            <InfoInput placeholder='Email' value={data.email && data.email} type='email' />
            <InfoInput placeholder='Country' value={data.country && data.country}/>
            <InputContainer>
              <InfoDoubleInput placeholder='First Name' value={data.first_name && data.first_name}/>
              <InfoDoubleInput placeholder='Last Name' value={data.last_name && data.last_name}/>
            </InputContainer>
            <InfoInput placeholder='Address' value={data.address && data.address}/>
            <InfoInput placeholder='Apartament' value={data.apartament && data.apartament}/>
            <InputContainer>
              <InfoDoubleInput placeholder='Postal Code' value={data.postal_code && data.postal_code}/>
              <InfoDoubleInput placeholder='City' value={data.city && data.city}/>
            </InputContainer>
            <InfoInput placeholder='Phone Number' type='number' value={data.phone && data.phone}/>
            <InfoButton>Accept</InfoButton>
          </FormInfo>
        </AccountSendInfo>
      </AccountContainer>
    </Main>
  )
  else return <div>Not Authorized</div>
}

export default Account