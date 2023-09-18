import React,{useEffect, useState} from 'react'
import { SearchContainer,SearchInput,SearchContainerBackground,SearchResults } from '../styles'
import { useDispatch,useSelector } from 'react-redux'
import { InitialStateType } from '../../Redux/state'
import { fetchProductsData } from '../../Redux/Apis'
import SearchedProduct from './components/SearchedProduct'

interface SearchProps {
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const Search:React.FC<SearchProps> = ({setIsSearch}) => {
  const dispatch = useDispatch()
  const products = useSelector((state:InitialStateType)=>state.products)
  const [searchInput,setSearchInput] = useState<string>("");
  const [searchProducts,setSearchProducts] = useState<InitialStateType['products'] | null>(null)

  const sort = {
    sort: false,
    type: 'none' as 'none',
  }

  useEffect(() => {
    fetchProductsData(dispatch,sort)
  },[])

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>):void=>{
      setSearchInput(e.target.value)
      const searchedProducts : InitialStateType['products'] = products?.filter(product=>product.name.includes(e.target.value.toLowerCase())) as InitialStateType['products'];
      setSearchProducts(searchedProducts)
    }

  return (
    <SearchContainerBackground onClick={()=>setIsSearch(false)}>
        <SearchContainer onClick={e => e.stopPropagation()} initial={{ y: '-100%' }} animate={{ y: '0%' }} exit={{ y: '-100%' }} transition={{duration: 0.3,ease:'easeInOut'}}>
            <SearchInput onChange={(e)=>handleSearch(e)} type="text" placeholder="Search"/>
            <p style={{display: "inline",margin:"0 0.5rem",cursor: "pointer",fontWeight:'bold'}} onClick={()=>setIsSearch(false)}>close</p>
        </SearchContainer>
        {(searchProducts?.length!=0 && searchInput!="") && <SearchResults onClick={e => e.stopPropagation()}>
          <h4>PRODUCTS</h4>
              {searchProducts?.map(product=><SearchedProduct setIsSearch={setIsSearch} id={product.id} img={product.img} price={product.price} name={product.name}/>)}
        </SearchResults>}
    </SearchContainerBackground>
  )
}

export default Search