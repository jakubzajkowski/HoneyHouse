import React from 'react'
import {SearchedProductContainer} from '../../styles'
import { useNavigate } from 'react-router-dom'

interface SearchedProductProps{
    img: string
    name: string
    price: number
    id: string
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchedProduct:React.FC<SearchedProductProps> = ({img,name,price,id,setIsSearch}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setIsSearch(false)
        navigate(`/shop/product/${id}`);
    }
  return (<SearchedProductContainer onClick={handleClick}>
                <img style={{width:'50px',height:'50px'}} src={img} alt={name+"_img"} />
                <p style={{fontWeight:'bold',fontSize:'0.9rem'}}>{name}</p>
                <p>{price}0  &euro;</p>
        </SearchedProductContainer>
  )
}

export default SearchedProduct