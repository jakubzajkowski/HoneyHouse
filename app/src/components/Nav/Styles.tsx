import styled from 'styled-components'

export const NavBar = styled.div`
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