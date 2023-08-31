import React,{useEffect} from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,Header,ProductContainer} from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData } from '../../Redux/Apis'
import Product from './Components/Product/Product'
import { WallpaperList } from './Components/Wallpaper/WallpaperList'
import Wallpaper from './Components/Wallpaper/Wallpaper'

const Home:React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector((state:InitialStateType)=>state.products)

  useEffect(() => {
    fetchProductsData(dispatch)
  },[])

  return (<Main>
      <Nav />
        <Header>Welcome to Honey House</Header>
        <ProductContainer>
          {products?.map(product=><Product data={product} key={product.id}/>)}
        </ProductContainer>
        {
          WallpaperList.map(wallpaper=><Wallpaper text={wallpaper.text} img={wallpaper.img} key={wallpaper.text}/>)
        }       
      </Main>
  )
}

export default Home