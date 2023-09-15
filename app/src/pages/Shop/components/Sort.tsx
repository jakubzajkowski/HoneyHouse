import React from 'react'
import { SortContainer,SortCategory,SortCategorySelect,SortCategoryOption} from '../styles'
import { fetchProductsData,FetchProductsDataSortedArg,fetchShopProductsData } from '../../../Redux/Apis'
import {useDispatch} from 'react-redux'

interface SortProps {
    isFiltered : boolean,
    category: string
}

const Sort:React.FC<SortProps> = ({isFiltered,category}) => {
  const dispatch = useDispatch()

  const handleSort = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    const sort:FetchProductsDataSortedArg= {
        sort: true,
        type: e.target.value as "priceAsc" | "nameAsc" | "weightAsc" | "priceDesc" | "nameDesc" | "weightDesc" | "none",
      }
        if (isFiltered){
            fetchShopProductsData(category,dispatch,sort)
        }else{
            fetchProductsData(dispatch,sort)
        }
  }

  return (
    <SortContainer>
        <SortCategory>
            <p>Sort:</p>
            <SortCategorySelect onChange={(e)=>handleSort(e)}>
              <SortCategoryOption value="none">Select category:</SortCategoryOption>
              <SortCategoryOption value="priceAsc">Price lowest to highest</SortCategoryOption>
              <SortCategoryOption value="priceDesc">Price highest to lowest</SortCategoryOption>
              <SortCategoryOption value="nameAsc">Name A-Z</SortCategoryOption>
              <SortCategoryOption value="nameDesc">Name Z-A</SortCategoryOption>
              <SortCategoryOption value="weightAsc">Weight lowest to highest</SortCategoryOption>
              <SortCategoryOption value="weightDesc">Weight highest to lowest</SortCategoryOption>
            </SortCategorySelect>
        </SortCategory>
    </SortContainer>
  )
}

export default Sort