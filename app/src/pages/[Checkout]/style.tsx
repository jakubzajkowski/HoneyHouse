import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
`

export const CheckoutContainer = styled.div`
    display: flex;
    width: 80%;
    flex-wrap:wrap;
    gap:3rem;
    margin: 3rem auto 1rem auto;
`

export const CheckoutForm = styled.div`
    width: 49%;
    padding:1rem;
    @media(max-width: 950px){
        width: 100%;
    }
`

export const CheckoutItems = styled.div`
    width: 35%;
    padding:1rem;
    @media(max-width: 950px){
        width: 100%;
    }
`
export const Logo = styled.h2`
    cursor:pointer;
    text-shadow: 1px 1px 3px #e6ad00, 1px 1px 3px #e6ad00;
    text-align: center;
    width: 100%;
    font-size:3rem;
`
export const FormInfo = styled.form`
    margin: auto;
`
export const InfoInput = styled.input`
    boder: none;
    display: block;
    width: 100%;
    padding: 0.8rem;
    margin:1rem 0;
    font-size:0.9rem;
`
export const InfoButton = styled.button`
    border: none;
    padding: 1rem 2rem;
    cursor:pointer;
    font-weight: bold;
    font-size:1rem;
    margin:1rem 0;
    background-color:rgb(236, 192, 45);
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const InfoDoubleInput = styled.input`
    boder: none;
    display: block;
    width: 49%;
    padding: 0.8rem;
    margin:1rem 0;
    font-size:0.9rem;
`
export const CheckoutSubtotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0 1.5rem 0 ;
`