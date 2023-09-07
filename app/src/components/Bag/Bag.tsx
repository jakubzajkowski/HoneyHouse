import React, { useEffect, useState } from 'react'
import { BagContainer,BagClose,BagBackground,BagHeader } from '../styles'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCart } from '../../Redux/Apis'
import { InitialStateType } from '../../Redux/state'
import useAuth from '../../hooks/useAuth'
import CartProduct from './components/CartProduct'

interface BagProps {
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>
}

const Bag:React.FC<BagProps> = ({setIsBag}) => {
  const {data} = useAuth()
  const cart = useSelector((state:InitialStateType)=>state.cartData)
  const dispatch = useDispatch()
  const [isLoading,setIsLoading]=useState<boolean>(true)

  useEffect(()=>{
    fetchCart(data?.id,dispatch,setIsLoading)
  },[data])

  return (<BagBackground onClick={()=>setIsBag(false)}>
        <BagContainer onClick={e => e.stopPropagation()} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{duration: 0.3,ease:'easeInOut'}}>
            <BagClose onClick={()=>setIsBag(false)}>Close</BagClose>
            <BagHeader>Your Cart</BagHeader>
            <p>{cart?.map(x=><p>{x.id}</p>)}</p>
        </BagContainer>
    </BagBackground>
  )
}

export default Bag