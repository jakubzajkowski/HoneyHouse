import React, { useEffect, useState } from 'react'
import { BagContainer,BagClose,BagBackground,BagHeader,BagProducts,BagButtonCheckout,BagCheckout,BagPriceCheckout } from '../styles'
import useAuth from '../../hooks/useAuth'
import CartProduct from './components/CartProduct'
import { CircularProgress } from '@mui/material';
import useCart from '../../hooks/useCart'
import useSubtotal from '../../hooks/useSubtotal';

interface BagProps {
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>
}

const Bag:React.FC<BagProps> = ({setIsBag}) => {
  const {data} = useAuth()
  const {cart}=useCart(data?.id as string)
  const subtotalPrice = useSubtotal(data?.id as string)


  return (<BagBackground onClick={()=>setIsBag(false)}>
        <BagContainer onClick={e => e.stopPropagation()} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{duration: 0.3,ease:'easeInOut'}}>
            <BagClose onClick={()=>setIsBag(false)}>Close</BagClose>
            <BagHeader>Your Cart</BagHeader>
            <BagProducts>
              {!cart ? <CircularProgress/> : cart?.map(product=><CartProduct key={product.id} id={product.id} title={product.name} price={product.price} img={product.img}/>)}
            </BagProducts>
            <p style={{fontSize:'0.7rem',margin:'1.5rem 0'}}>limit 10 items per order please make sure all items in cart are correct. we cannot cancel or modify orders once they are placed orders process within 5-7 business days. you will receive an email with tracking information after your order ships</p>
            <BagCheckout>
              <BagPriceCheckout>
                <h4>subtotal: </h4>
                <p>{subtotalPrice}0 &euro;</p>
              </BagPriceCheckout>
              <BagButtonCheckout>checkout</BagButtonCheckout>
            </BagCheckout>
        </BagContainer>
    </BagBackground>
  )
}

export default Bag