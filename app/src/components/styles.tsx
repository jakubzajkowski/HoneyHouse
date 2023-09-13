import styled from 'styled-components'
import { motion } from 'framer-motion'

interface StyleProps {
    theme: boolean;
  }

export const NavBar = styled(motion.div)<StyleProps>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    z-index:100;
    justify-content: space-between;
    background-color: white;
    color: ${props => props.theme==true ? "#e6ad00" : "black"};
    align-items:center;
    padding: 1.5rem
`
export const NavBarOption = styled.p`
    font-weight: bold;
    padding:0.5rem;
    cursor:pointer;
`
export const Logo = styled.h2`
    cursor:pointer;
    text-shadow: 1px 1px 3px #e6ad00, 1px 1px 3px #e6ad00;
`
export const NavBarMobileGroup = styled.div`
    display:none;
    @media(max-width: 950px){
        display:block;
    }
`

export const LinkStyle = {
    color: 'black',
    textDecoration: 'none',
}
export const NavBarGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    @media(max-width: 950px){
        display:none;
    }
`
export const BarsStyle= {
    width:'25px',
    height: '25px',
    cursor:'pointer',
}
export const BagStyle = {
    fontWeight: 'bold',
    fontSize: '0.9rem',
}
export const BagSpan = styled.span`
    background-color: black;
    color: white;
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    text-align:center;
    cursor:pointer;
`
export const MobileManuOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    margin: 8rem 0 0rem 0;
    text-align: left;
`
export const MobileManuOptionContainerOption = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 3rem;
`
export const MobileManuClose = styled.p`
    position: absolute;
    top:0px;
    right: 0px;
    margin:3rem;
    font-weight: bold;
`
export const FooterElement = styled.div`
    @media(max-width: 950px){
        width:100%;
    }
`
export const FooterContainer = styled.div<StyleProps>`
    margin: 3rem 0 3rem 20%;
    width: 80%;
    display: flex;
    color: ${props => props.theme==true ? "green" : "black"};
    gap: 3rem;
    justify-content: start;
    flex-wrap: wrap;
    font-size:1.1rem;
    @media(max-width: 950px){
        margin: 3rem 0 3rem 0;
        width: 100%;
    }
`
export const FooterOptionStyle = {
    margin: '2rem 3rem',
    cursor: 'pointer',
    fontFamily: "'Gloria Hallelujah', cursive"
}

export const BagContainer = styled(motion.div)`
    width: 20%;
    position: fixed;
    top:0;
    bottom:0;
    background-color: orange;
    right:0;
    padding: 1rem;
    @media(min-width: 950px) and (max-width: 1300px){
        width: 35%;
    }
    @media(max-width: 950px){
        width: 90%;
    }
`
export const BagClose = styled.p`
    top:0;
    position: absolute;
    margin: 1.5rem;
    right:0;
    font-size: 1.1rem;
    font-weight:bold;
    cursor: pointer;
`
export const BagBackground = styled.div`
    width: 100%;
    position: fixed;
    top:0;
    z-index: 1000;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.75);
`
export const BagHeader = styled.h3`
    font-size: 1.5rem;
    margin: 3rem 0;
    font-family: 'Sedgwick Ave Display', cursive;
`
export const BagProducts = styled.div`
    max-height: 500px;
    overflow-y: auto;
    @media(max-width: 950px){
        max-height: 350px;
    }
`
export const CartProductContainer = styled.div`
    width:100%;
    display:flex;
    margin: 1rem 0;
    justify-content: space-between;
`
export const ProductImg = styled.div`
    width:48%;
`
export const ProductInfo = styled.div`
    width:48%;
`
export const BagButtonCheckout = styled.button`
    border: none;
    width:49%;
    background-color: black;
    color: white;
    font-size:1rem;
    padding:2rem 0;
    font-weight: bold;
    cursor:pointer;
`
export const BagCheckout = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`
export const BagPriceCheckout = styled.div`
    border: 2px solid black;
    display:flex;
    justify-content: space-between;
    font-size:1rem;
    font-weight: bold;
    padding:2rem 0.3rem;
    width:49%;
    color: black;
`
