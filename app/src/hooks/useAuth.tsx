import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserAuth } from '../Redux/Apis'
import { InitialStateType } from '../Redux/state'
import isTokenExpired from '../utils/isTokenExpired'

const useAuth = () => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const [isLoading,setIsLoading]=useState<boolean>(true)
    const data = useSelector((state:InitialStateType)=>state.userData)
  
    useEffect(()=>{
      if (isTokenExpired(token)){
        fetchUserAuth(token as string,dispatch,setIsLoading)
      }else{
        setIsLoading(false)
      }
    },[])
  return {isLoading,data}
}

export default useAuth