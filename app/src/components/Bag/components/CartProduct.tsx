import React from 'react'
import { CartProductContainer,ProductInfo,ProductImg } from '../../styles'

interface CartProductProps {
    img : string
    title : string
    price: number
}

const CartProduct: React.FC<CartProductProps> = ({img,title,price}) => {
  return (
    <CartProductContainer>
        <ProductImg>
            <img src={img} alt="img" style={{width:'100%'}} />
        </ProductImg>
        <ProductInfo>
            <h3>{title}</h3>
            <p>{price} Eur</p>
        </ProductInfo>
    </CartProductContainer> 
  )
}

export default CartProduct