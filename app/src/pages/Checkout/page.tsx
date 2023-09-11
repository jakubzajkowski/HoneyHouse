import React from 'react'
import useAuth from '../../hooks/useAuth'
import {Main,CheckoutContainer,CheckoutForm,CheckoutItems,Logo,FormInfo,InfoButton,InfoDoubleInput,InfoInput,InputContainer} from './style'
import { Navigate,Link,useParams } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import CheckoutProduct from './components/checkoutProduct'

const Checkout:React.FC = () => {
  const {data}=useAuth()
  const {cart} = useCart() 

  console.log(cart)

  if (!data) return <div>Loading...</div>

  if (data) return (
    <Main>
      <CheckoutContainer>
       <CheckoutForm>
          <Link to='/' style={{textDecoration:'none',color:'black'}}><Logo>Honey Valley</Logo></Link>
          <h3 style={{margin:'1.5rem 0'}}>Contact:</h3>
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
       </CheckoutForm>
       <CheckoutItems>
          {cart?.map(element=><CheckoutProduct key={element.id} img={element.img} price={element.price} name={element.name}/> )}
       </CheckoutItems>
      </CheckoutContainer>
    </Main>
  )
}

export default Checkout