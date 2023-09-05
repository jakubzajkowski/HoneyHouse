import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Main,ProductContainer,ProductImgSide,ProductInfoSide,ProductImg,ProductDesc,ProductButton } from '../styles'
import Nav from '../../../components/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateType } from '../../../Redux/state'
import { fetchProductData } from '../../../Redux/Apis'
import { AddCartHandler,AddCartHandlerArgs } from '../../../handlers/AddCartHandler'
import useAuth from '../../../hooks/useAuth'

const Product:React.FC = () => {
    const { id } = useParams();
    const dispatch=useDispatch()
    const product = useSelector((state:InitialStateType)=>state.product)
    const {data} = useAuth()

    useEffect(() => {
        fetchProductData(id as string,dispatch)
      },[])

    const handleAddCart= (userId:string ,category:string,productId:string,price:number):void=>{
        const data:AddCartHandlerArgs = { userId: userId,product_category:category, product_id: productId ,price: price }
        console.log(data)
        AddCartHandler(data)
    }

    if (product) return (
        <div style={{width:'100%'}}>
        <Main>
            <Nav />
            <ProductContainer>
                <ProductImgSide>
                    <ProductImg src={product?.img} alt="img honey" loading='lazy'/>
                </ProductImgSide>
                <ProductInfoSide>
                    <h1 style={{margin:'1rem 0',fontFamily:"'Bebas Neue', sans-serif"}}>{product?.name}</h1>
                    <ProductDesc>{product?.desc}</ProductDesc>
                    <p style={{margin:'2rem 0',fontWeight:'bold'}}>{product?.price}0  &euro; / EUR</p>
                    <p style={{margin:'2rem 0'}}>Weight: {(product?.weight as number/1000)} kg</p>
                    <ProductButton onClick={()=>data ? handleAddCart(data.id,product.category,product.id,product.price) : location.href='/login'}>add to cart</ProductButton>
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
    else (
    <div>Not Found</div>
    )
}

export default Product