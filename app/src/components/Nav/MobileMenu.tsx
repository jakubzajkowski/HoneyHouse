import React, {useState} from 'react'
import { motion } from "framer-motion"
import { MobileManuOptionContainer,MobileManuClose,MobileManuOptionContainerOption,LinkStyle } from '../styles'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { LogoutHandler } from '../../handlers/LogoutHandler'
import { AnimatePresence } from 'framer-motion'
import Search from '../Search/Search'

interface MobileMenuProps {
    setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu:React.FC<MobileMenuProps> = ({setIsMobileMenu}) => {
  const {data} = useAuth()
  const [isSearch,setIsSearch]=useState<boolean>(false)
  return (
    <motion.div  initial={{ x: '-100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} transition={{duration: 0.3,ease:'easeInOut'}} style={{zIndex:1000,backgroundColor:'white',position:'fixed',top:'0',left:'0',right:'0',bottom:'0',display:'flex',alignItems:'self-start'}}>
        <MobileManuClose onClick={()=>setIsMobileMenu(false)}>Close</MobileManuClose>
        <AnimatePresence>
        {isSearch && <Search setIsSearch={setIsSearch}/>}
        </AnimatePresence>
        <MobileManuOptionContainer>
            <MobileManuOptionContainerOption><Link to='/shop' style={LinkStyle}>Shop</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to='/pictures' style={LinkStyle}>Picture</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption onClick={()=>setIsSearch(true)}>Search</MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption><Link to={data ? '/account' : '/login'} style={LinkStyle}>Account</Link></MobileManuOptionContainerOption>
            <MobileManuOptionContainerOption>{data ? <p onClick={()=>LogoutHandler()}>log off</p> :<Link to='/login' style={LinkStyle}>Log in</Link>}</MobileManuOptionContainerOption>
        </MobileManuOptionContainer>
    </motion.div>
  )
}

export default MobileMenu