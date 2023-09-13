import React from 'react'
import useAuth from '../../hooks/useAuth'
import {Main,CheckoutContainer,CheckoutForm,CheckoutItems,Logo,FormInfo,InfoButton,InfoDoubleInput,InfoInput,InputContainer,CheckoutSubtotal} from './style'
import { Navigate,Link} from 'react-router-dom'
import useCart from '../../hooks/useCart'
import CheckoutProduct from './components/CheckoutProduct'
import { CircularProgress } from '@mui/material';

const Checkout:React.FC = () => {
  const {data}=useAuth()
  const {cart,subtotal} = useCart() 

  console.log(cart)

  if (!data) return <div>Loading...</div>

  if (data) return (
    <Main>
      <CheckoutContainer>
       <CheckoutForm>
          <Link to='/' style={{textDecoration:'none',color:'black'}}><Logo>Honey Valley</Logo></Link>
          <h3 style={{margin:'1.5rem 0'}}>Contact:</h3>
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
            <InfoButton>Pay</InfoButton>
          </FormInfo>
       </CheckoutForm>
       <CheckoutItems>
          {cart ? cart.map(element=><CheckoutProduct key={element.id} img={element.img} price={element.price} name={element.name}/>) : <CircularProgress/>}
          <hr style={{margin:'1rem 0'}}/>
          <CheckoutSubtotal>
            <p>Subtotal: </p>
            <p style={{fontWeight:'bold'}}>{Math.round(subtotal*10)/10} &euro;</p>
          </CheckoutSubtotal>
          <CheckoutSubtotal>
            <p>Total: </p>
            <p style={{fontWeight:'bold',fontSize:'1.5rem'}}>{Math.round(subtotal*10)/10} &euro;</p>
          </CheckoutSubtotal>
       </CheckoutItems>
      </CheckoutContainer>
    </Main>
  )
  else return <Navigate to="/login" replace />
}

export default Checkout