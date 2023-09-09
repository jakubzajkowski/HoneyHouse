import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCart } from '../Redux/Apis'
import { fetchCartSubtotal } from '../Redux/Apis'
import { InitialStateType } from '../Redux/state'

const useCart = (id:string) => {
    const dispatch = useDispatch()
    const cart = useSelector((state:InitialStateType)=>state.cartData)
    const subtotal = useSelector((state:InitialStateType)=>state.subtotalPrice)
  
    useEffect(()=>{
      const intervalId = setInterval(() => {
        fetchCart(id,dispatch)
        fetchCartSubtotal(id,dispatch)
      },500)
        return () => clearInterval(intervalId);
    },[])
  return {cart,subtotal}
}

export default useCart