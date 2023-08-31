import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
    width: 100%;
    margin: 8rem 0 0 0;
`
export const RegisterHeader = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 2.2rem;
    font-family: 'Shadows Into Light', cursive;
`
export const RegisterForm = styled.form`
    margin: 1rem auto;
    width: 25%;
    padding:1rem;
    text-align:center;
`
export const RegisterInput = styled.input`
    boder: none;
    display: block;
    width: 100%;
    padding: 0.8rem;
    margin:1rem 0;
    font-size:1rem;
`
export const RegisterButton = styled.button`
    border: none;
    padding: 1rem 2rem;
    cursor:pointer;
    font-weight: bold;
    font-size:1rem;
    margin:1rem 0;
    font-family: 'Shadows Into Light', cursive;
    background-color:rgb(236, 192, 45);
`