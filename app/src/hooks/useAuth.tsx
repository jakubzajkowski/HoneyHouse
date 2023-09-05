import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserAuth } from '../Redux/Apis'
import { InitialStateType } from '../Redux/state'

const useAuth = () => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const [isLoading,setIsLoading]=useState<boolean>(true)
    const data = useSelector((state:InitialStateType)=>state.userData)
  
    useEffect(()=>{
      fetchUserAuth(token as string,dispatch,setIsLoading)
    },[])
  return {isLoading,data}
}

export default useAuth