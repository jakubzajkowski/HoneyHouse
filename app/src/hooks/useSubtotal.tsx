import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCartSubtotal } from '../Redux/Apis'
import { InitialStateType } from '../Redux/state'

const useSubtotal = (id:string) => {
    const dispatch = useDispatch()
    const subtotal = useSelector((state:InitialStateType)=>state.subtotalPrice)
  
    useEffect(()=>{
      const intervalId = setInterval(() => {
        fetchCartSubtotal(id,dispatch)
      },1000)
        return () => clearInterval(intervalId);
    },[])
  return subtotal
}

export default useSubtotal