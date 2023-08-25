import React,{useState,useEffect} from 'react'
import { NavBar,NavBarOption,LinkStyle,NavBarGroup,Logo,NavBarMobileGroup,BarsStyle,BagStyle,BagSpan } from './Styles'
import {Link} from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { AnimatePresence } from 'framer-motion'

const Nav:React.FC = () => {
  const [isMobileMenu,setIsMobileMenu]=useState<boolean>(false)

  useEffect(()=>{
    if(isMobileMenu){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  })

  return (
    <>
      <AnimatePresence>
      {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu}/>}
      </AnimatePresence>
      <NavBar>
          <NavBarGroup>
              <NavBarOption><Link to='/shop' style={LinkStyle}>shop</Link></NavBarOption>
              <NavBarOption><Link to='/pictures' style={LinkStyle}>pictures</Link></NavBarOption>
          </NavBarGroup>
          <NavBarMobileGroup>
                <svg style={BarsStyle} onClick={()=>setIsMobileMenu(true)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </NavBarMobileGroup>
          <Logo>Honey House</Logo>
          <NavBarMobileGroup>
                <p style={BagStyle}>bag <BagSpan>0</BagSpan></p>
          </NavBarMobileGroup>
          <NavBarGroup>
              <NavBarOption><Link to='/shop' style={LinkStyle}>Poland (PLN/zł)</Link></NavBarOption>
              <NavBarOption>search</NavBarOption>
              <NavBarOption><Link to='/pictures' style={LinkStyle}>log in</Link></NavBarOption>
              <NavBarOption>bag</NavBarOption>
          </NavBarGroup>
      </NavBar>
    </>
  )
}

export default Nav