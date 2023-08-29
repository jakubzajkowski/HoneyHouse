import React, { useState } from 'react'
import { ProductsType } from '../../../Redux/state'
import { ProductElement,ProductElementImg,ProductElementPrice,ProductElementTitle } from '../styles'
import { useMediaQuery } from 'react-responsive'

interface ProductProps {
    data : ProductsType
}

const Product: React.FC<ProductProps>= ({data}) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 950px)' })
    const [isHovered,setHovered] = useState<boolean>(false)
    
    return (
    <ProductElement onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        {!isMobileScreen && <ProductElementTitle initial={{opacity: 0}} animate={{opacity: isHovered ? 1 : 0}}>{data.name}</ProductElementTitle>}
        <ProductElementImg initial={{scale: 1}} animate={{scale: isHovered ? 1.05 : 1}} src={data.img} alt="img" />
        {isMobileScreen && <ProductElementTitle>{data.name}</ProductElementTitle>}
        <ProductElementPrice initial={{opacity:isMobileScreen ? 1 : 0}} animate={{opacity: isHovered ? 1 : (isMobileScreen ? 1 : 0)}}>{data.price}0 &euro; / EUR</ProductElementPrice>
    </ProductElement>
    )
}

export default Product