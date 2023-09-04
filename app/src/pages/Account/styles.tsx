import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
    width: 100%;
    margin: 8rem 0 0 0;
`
export const AccountContainer= styled.div`
    margin: auto;
    width:75%;
    padding:1rem;
    display:flex;
    gap:1rem;
    justify-content:space-between;
`
export const AccountInfoBar= styled.div`
    width:50%;
    padding:1rem;
`
export const AccountSendInfo= styled.div`
    width:50%;
    padding:1rem;
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