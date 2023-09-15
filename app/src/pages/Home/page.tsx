import React,{useEffect} from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,Header,ProductContainer} from './styles'
import {useDispatch, connect} from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData } from '../../Redux/Apis'
import Product from './Components/Product/Product'
import { WallpaperList } from './Components/Wallpaper/WallpaperList'
import Wallpaper from './Components/Wallpaper/Wallpaper'

interface HomeProps {
    products: InitialStateType['products']
}

const Home:React.FC<HomeProps> = ({products}) => {
  const dispatch = useDispatch()

  const sort = {
    sort: false,
    type: 'none' as 'none',
  }

  useEffect(() => {
    fetchProductsData(dispatch,sort)
  },[])

  return (<Main>
      <Nav />
        <Header>Welcome to Honey Valley</Header>
        <ProductContainer>
          {products?.map(product=><Product data={product} key={product.id}/>)}
        </ProductContainer>
        {
          WallpaperList.map(wallpaper=><Wallpaper text={wallpaper.text} img={wallpaper.img} key={wallpaper.text}/>)
        }       
      </Main>
  )
}

const mapStateToProps = (state:InitialStateType) => ({
  products: state.products,
});


export default connect(mapStateToProps)(Home)