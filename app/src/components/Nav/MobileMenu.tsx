import React from 'react'
import { motion } from "framer-motion"
import { MobileManuOptionContainer,MobileManuClose,MobileManuOptionContainerOption,LinkStyle } from '../styles'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
    setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu:React.FC<MobileMenuProps> = ({setIsMobileMenu}) => {
  return (
    <motion.div  initial={{ x: '-100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} transition={{duration: 0.3,ease:'easeInOut'}} style={{zIndex:10,backgroundColor:'white',position:'fixed',top:'0',left:'0',right:'0',bottom:'0',display:'flex',alignItems:'self-start'}}>
        <MobileManuClose onClick={()=>setIsMobileMenu(false)}>Close</MobileManuClose>
        <MobileManuOptionContainer>
            <MobileManuOptionContainerOption><Link to='/shop' style={LinkStyle}>Shop</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to='/pictures' style={LinkStyle}>Picture</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to='/search' style={LinkStyle}>Search</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to='/country' style={LinkStyle}>Country (EUR)</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to='/login' style={LinkStyle}>Log in</Link></MobileManuOptionContainerOption>
        </MobileManuOptionContainer>
    </motion.div>
  )
}

export default MobileMenu