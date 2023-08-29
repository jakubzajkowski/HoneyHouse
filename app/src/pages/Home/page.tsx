import React,{useEffect} from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,Header } from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData } from '../../Redux/Apis'
import { ProductContainer } from './styles'
import Product from './Product/Product'

const Home:React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector((state:InitialStateType)=>state.products)

  useEffect(() => {
    fetchProductsData(dispatch)
  },[])

  return (
    <div style={{width:'100%'}}>
      <Nav />
      <Main>
        <Header>Welcome to Honey House</Header>
        <ProductContainer>
          {products?.map(product=><Product data={product} key={product.id}/>)}
        </ProductContainer>
      </Main>
    </div>
  )
}

export default Home