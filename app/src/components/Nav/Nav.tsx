import React,{useState,useEffect} from 'react'
import { NavBar,NavBarOption,NavBarGroup,Logo,NavBarMobileGroup,BarsStyle,BagStyle,BagSpan } from '../styles'
import {Link} from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { AnimatePresence } from 'framer-motion'
import { InitialStateType } from '../../Redux/state'
import { useSelector } from 'react-redux'
import Bag from '../Bag/Bag'
import useAuth from '../../hooks/useAuth'
import useCart from '../../hooks/useCart'


const Nav:React.FC = () => {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenu,setIsMobileMenu]=useState<boolean>(false)
  const [isBag,setIsBag]=useState<boolean>(false)
  const theme = useSelector((state:InitialStateType)=>state.theme)
  const {data} = useAuth()
  const {cart} = useCart()

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    if(isMobileMenu || isBag){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <AnimatePresence>
      {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu}/>}
      </AnimatePresence>
      <AnimatePresence>
        {isBag && <Bag setIsBag={setIsBag}/>}
      </AnimatePresence>
      <NavBar theme={theme} initial={{y:'0%'}} animate={{y: !visible ? '-100%' : '0%'}} transition={{ease:'easeInOut',duration:'0.5'}}>
          <NavBarGroup>
              <NavBarOption><Link style={{color: theme ? "#e6ad00" : 'black',textDecoration: 'none',}} to='/shop'>shop</Link></NavBarOption>
              <NavBarOption><Link style={{color: theme ? "#e6ad00" : 'black',textDecoration: 'none',}} to='/pictures'>pictures</Link></NavBarOption>
          </NavBarGroup>
          <NavBarMobileGroup>
                <svg style={BarsStyle} onClick={()=>setIsMobileMenu(true)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </NavBarMobileGroup>
          <Link to='/' style={{textDecoration:'none',color:'black'}}><Logo>Honey Valley</Logo></Link>
          <NavBarMobileGroup>
                <p style={BagStyle} onClick={()=>setIsBag(true)}>bag <BagSpan>{cart ? cart?.length : 0}</BagSpan></p>
          </NavBarMobileGroup>
          <NavBarGroup>
              <NavBarOption><Link style={{color: theme ? "#e6ad00" : 'black',textDecoration: 'none',}} to={data ? '/account' : '/login'} >account</Link></NavBarOption>
              <NavBarOption>search</NavBarOption>
              <NavBarOption><Link style={{color: theme ? "#e6ad00" : 'black',textDecoration: 'none',}} to='/login'>log in</Link></NavBarOption>
              <NavBarOption onClick={()=>setIsBag(true)}>bag <BagSpan>{cart ? cart?.length : 0}</BagSpan></NavBarOption>
          </NavBarGroup>
      </NavBar>
    </>
  )
}

export default Nav