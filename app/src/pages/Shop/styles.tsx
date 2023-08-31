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
export const ProductContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    padding: 1rem;
    gap: 3rem;
    flex-wrap:wrap;
`
export const ProductImgSide = styled.div`
    width:30%;
    text-align: left;
    @media(max-width: 950px){
        width:100%;
    }
`
export const ProductImg = styled.img`
    width:100%;
`
export const ProductInfoSide = styled.div`
    width:30%;
    @media(max-width: 950px){
        width:100%;
    }
`
export const ProductDesc = styled.p`
    width:100%;
    font-weight: bold;
    text-align: start;
    font-size:1.2rem;
    font-family: 'Shadows Into Light', cursive;
`
export const ProductButton = styled.button`
    background-color: rgb(236, 192, 45);
    border: solid 1px black;
    width: 80%;
    font-size:1rem;
    font-weight:bold;
    padding: 1rem 1rem;
    cursor:pointer;
    -webkit-box-shadow: 0px 0px 0px 2px rgb(236, 192, 45);
    -moz-box-shadow: 0px 0px 0px 2px rgb(236, 192, 45);
    box-shadow: 0px 0px 0px 2px rgb(236, 192, 45);
`