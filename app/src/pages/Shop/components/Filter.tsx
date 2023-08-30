import React, { useState } from 'react'
import { FilterContainer,FilterCategory,FilterSort,FilterCategorySelect,FilterCategoryOption} from '../styles'
import { fetchShopProductsData } from '../../../Redux/Apis'
import {useDispatch} from 'react-redux'

interface FilterProps {
    setIsFilter:React.Dispatch<React.SetStateAction<boolean>>,
    productsCount: number | undefined
}

const Filter:React.FC<FilterProps> = ({setIsFilter,productsCount}) => {
  const dispatch = useDispatch()
  const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    setIsFilter(true)
    fetchShopProductsData(e.currentTarget.value,dispatch)
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
            <p>Sort by:</p>
            <p>Products: {productsCount}</p>
        </FilterSort>
    </FilterContainer>
  )
}

export default Filter