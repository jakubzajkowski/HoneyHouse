import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavBar = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items:center;
    padding: 1.5rem
`
export const NavBarOption = styled.p`
    font-weight: bold;
    padding:0.5rem;
    cursor:pointer;
`
export const Logo = styled.h2`
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
export const FooterContainer = styled.div`
    margin: 3rem 0 3rem 20%;
    width: 80%;
    display: flex;
    gap: 3rem;
    justify-content: start;
    flex-wrap: wrap;
    font-size:1.1rem;
`
export const FooterOptionStyle = {
    margin: '2rem 3rem',
    cursor: 'pointer',
    fontFamily: "'Gloria Hallelujah', cursive"
}