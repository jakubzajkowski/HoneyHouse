import React from 'react'
import { BagContainer,BagClose,BagBackground,BagHeader,BagProducts,BagButtonCheckout,BagCheckout,BagPriceCheckout } from '../styles'
import useAuth from '../../hooks/useAuth'
import CartProduct from './components/CartProduct'
import { CircularProgress } from '@mui/material';
import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom';

interface BagProps {
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>
}

const Bag:React.FC<BagProps> = ({setIsBag}) => {
  const {data,isLoading} = useAuth()
  const {cart,subtotal}=useCart()


  return (<BagBackground onClick={()=>setIsBag(false)}>
        <BagContainer onClick={e => e.stopPropagation()} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{duration: 0.3,ease:'easeInOut'}}>
            <BagClose onClick={()=>setIsBag(false)}>Close</BagClose>
            <BagHeader>Your Cart</BagHeader>
            <BagProducts>
              {!data ? <h2>Login to see cart</h2> : (cart ? cart.map(product=><CartProduct key={product.id} id={product.id} title={product.name} price={product.price} img={product.img}/>) : <CircularProgress />)}
            </BagProducts>
            <p style={{fontSize:'0.7rem',margin:'1.5rem 0'}}>limit 10 items per order please make sure all items in cart are correct. we cannot cancel or modify orders once they are placed orders process within 5-7 business days. you will receive an email with tracking information after your order ships</p>
            <BagCheckout>
              <BagPriceCheckout>
                <h4>subtotal: </h4>
                <p>{Math.round(subtotal * 10) / 10}0 &euro;</p>
              </BagPriceCheckout>
              <BagButtonCheckout><Link to={`/checkout/${data?.id}`} style={{textDecoration:'none',color:'white'}}>checkout</Link></BagButtonCheckout>
            </BagCheckout>
        </BagContainer>
    </BagBackground>
  )
}

export default Bag