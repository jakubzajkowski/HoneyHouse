import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCart } from '../Redux/Apis'
import { InitialStateType } from '../Redux/state'

const useCart = (id:string) => {
    const dispatch = useDispatch()
    const cart = useSelector((state:InitialStateType)=>state.cartData)
  
    useEffect(()=>{
      const intervalId = setInterval(() => {
        fetchCart(id,dispatch)
      },1000)
        return () => clearInterval(intervalId);
    },[])
  return {cart}
}

export default useCart