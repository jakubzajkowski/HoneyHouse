import React,{useEffect, useState} from 'react'
import { ProductContainer } from '../Home/styles'
import {useSelector, useDispatch} from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData} from '../../Redux/Apis'
import Nav from '../../components/Nav/Nav'
import { Main,ShopHeader,PageButton,PageButtonsContainer } from './styles'
import Filter from './components/Filter'
import Product from '../Home/Components/Product/Product'
import Sort from './components/Sort'

const Shop:React.FC = () => {
  const [isFilter,setIsfilter] = useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector((state:InitialStateType)=>state.products)
  const filterProducts = useSelector((state:InitialStateType)=>state.shopProducts)
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [category,setCategory] = useState<string>('')
  const postPerPage = 8
  const pages = [];

  const sort = {
    sort: false,
    type: 'none' as 'none',
  }

  useEffect(() => {
    fetchProductsData(dispatch,sort)
  },[])

  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex-postPerPage;

  const currentProducts  = products?.slice(firstPageIndex,lastPageIndex)
  const currentFilterProducts = filterProducts?.slice(firstPageIndex,lastPageIndex)
  const pagesNumber = Math.ceil((isFilter ? filterProducts?.length as number : products?.length as number)/postPerPage)

  for (let i=1;i<pagesNumber+1;i++){
    pages.push(i)
  }

  const handlePageChange = (page:number)=>{
      setCurrentPage(page)
      window.scrollTo(0, 150);
  }

  return (
      <Main>
        <Nav />
        <Filter setCategory={setCategory} setIsFilter={setIsfilter} setCurrentPage={setCurrentPage} productsCount={isFilter ? filterProducts?.length : products?.length}/>
        <Sort category={category} isFiltered={isFilter}/>
        <ShopHeader>Shop All</ShopHeader>
        <ProductContainer>
            {
            isFilter ? 
            currentFilterProducts?.map(product=><Product data={product} key={product.id}/>) 
            : 
            currentProducts?.map(product=><Product data={product} key={product.id}/>)
            }
        </ProductContainer>
        <PageButtonsContainer>
         {pages.map(page=><PageButton key={page} onClick={()=>handlePageChange(page)}>{page}</PageButton>)}
        </PageButtonsContainer>
      </Main>
  )
}

export default Shop