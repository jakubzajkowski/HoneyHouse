import styled from "styled-components";

export const Main = styled.div`
    margin: 8rem 0 0 0;
`
export const ShopHeader = styled.h1`
    text-align:center;
    font-family: 'Sedgwick Ave Display', cursive;
`
export const FilterContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding:3rem;
    flex-wrap: wrap;
    @media(max-width: 950px){
        padding:0.5rem;
        margin: 1rem 0 ;
    }
`
export const FilterCategory = styled.div`
   display:flex;
   align-items:center;
   @media(max-width: 950px){
    width:100%;
}
`
export const FilterCategorySelect = styled.select`
    border:none;
    padding:0.5rem 1rem;
    display:inline;
    margin:0 1rem;
    font-size:0.9rem;
    @media(max-width: 950px){
        font-size: 0.8rem;
        margin:0 0.2rem;
        padding:0.5rem 0.5rem;
    }
`
export const FilterCategoryOption = styled.option`
    padding:1rem 1rem;
    font-size:1rem;
    @media(max-width: 950px){
        font-size: 0.8rem;
    }
`
export const FilterSort = styled.div`
   display:flex;
   align-items:center;
   @media(max-width: 950px){
    width:100%;
}
`