import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Main,ProductContainer,ProductImgSide,ProductInfoSide,ProductImg,ProductDesc,ProductButton } from '../styles'
import Nav from '../../../components/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateType } from '../../../Redux/state'
import { fetchProductData } from '../../../Redux/Apis'

const Product:React.FC = () => {
    const { id } = useParams();
    const dispatch=useDispatch()
    const product = useSelector((state:InitialStateType)=>state.product)

    useEffect(() => {
        fetchProductData(id as string,dispatch)
      },[])

    return (
        <div style={{width:'100%'}}>
        <Main>
            <Nav />
            <ProductContainer>
                <ProductImgSide>
                    <ProductImg src={product?.img} alt="img honey" />
                </ProductImgSide>
                <ProductInfoSide>
                    <h1 style={{margin:'1rem 0',fontFamily:"'Bebas Neue', sans-serif"}}>{product?.name}</h1>
                    <ProductDesc>{product?.desc}</ProductDesc>
                    <p style={{margin:'2rem 0',fontWeight:'bold'}}>{product?.price}0  &euro; / EUR</p>
                    <p style={{margin:'2rem 0'}}>Weight: {(product?.weight as number/1000)} kg</p>
                    <ProductButton>add to cart</ProductButton>
                    <ul>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>{product?.category}</li>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>{product?.taste}</li>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>{product?.usage}</li>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>{product?.alergic_info}</li>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>Expires date: {product?.expire_date}</li>
                        <li style={{margin: '1rem',fontSize:'0.9rem'}}>Quantity in store: {product?.quantity}</li>
                    </ul>
                </ProductInfoSide>
            </ProductContainer>
        </Main>
        </div>
    )
}

export default Product