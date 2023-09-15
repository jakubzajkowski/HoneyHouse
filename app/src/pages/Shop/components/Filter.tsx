import React from 'react'
import { FilterContainer,FilterCategory,FilterSort,FilterCategorySelect,FilterCategoryOption} from '../styles'
import { fetchShopProductsData } from '../../../Redux/Apis'
import {useDispatch} from 'react-redux'

interface FilterProps {
    setIsFilter:React.Dispatch<React.SetStateAction<boolean>>,
    productsCount: number | undefined
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

const Filter:React.FC<FilterProps> = ({setIsFilter,productsCount,setCurrentPage,setCategory}) => {
  const dispatch = useDispatch()

  const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    const sort = {
      sort: false,
      type: 'none' as 'none',
    }
    if (e.target.value==""){
      setIsFilter(false)
    }
    else{
      setIsFilter(true)
      setCurrentPage(1)
      setCategory(e.currentTarget.value)
      fetchShopProductsData(e.currentTarget.value,dispatch,sort)
    }
  }

  return (
    <FilterContainer>
        <FilterCategory>
            <p>Filter:</p>
            <FilterCategorySelect onChange={(e)=>handleFilter(e)}>
              <FilterCategoryOption value="">Select category:</FilterCategoryOption>
              <FilterCategoryOption value="honey">Honey</FilterCategoryOption>
              <FilterCategoryOption value="candy">Candy</FilterCategoryOption>
              <FilterCategoryOption value="fruits">Fruits</FilterCategoryOption>
            </FilterCategorySelect>
        </FilterCategory>
        <FilterSort>
            <p> Products: {productsCount}</p>
        </FilterSort>
    </FilterContainer>
  )
}

export default Filter