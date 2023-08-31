import React,{useEffect, useState} from 'react'
import { ProductContainer } from '../Home/styles'
import {useSelector, useDispatch} from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData} from '../../Redux/Apis'
import Nav from '../../components/Nav/Nav'
import { Main,ShopHeader } from './styles'
import Filter from './components/Filter'
import Product from '../Home/Components/Product/Product'

const Shop:React.FC = () => {
  const [isFilter,setIsfilter] = useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector((state:InitialStateType)=>state.products)
  const filterProducts = useSelector((state:InitialStateType)=>state.shopProducts)

  useEffect(() => {
    fetchProductsData(dispatch)
  },[])

  return (
    <div style={{width:'100%'}}>
      <Main>
        <Nav />
        <Filter setIsFilter={setIsfilter} productsCount={isFilter ? filterProducts?.length : products?.length}/>
        <ShopHeader>Shop All</ShopHeader>
        <ProductContainer>
            {
            isFilter ? 
            filterProducts?.map(product=><Product data={product} key={product.id}/>) 
            : 
            products?.map(product=><Product data={product} key={product.id}/>)
            }
        </ProductContainer>
      </Main>
    </div>
  )
}

export default Shop