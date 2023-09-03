import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserAuth } from '../../Redux/Apis'
import { InitialStateType } from '../../Redux/state'

const Account:React.FC = () => {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const data = useSelector((state:InitialStateType)=>state.userData)

  useEffect(()=>{
    fetchUserAuth(token as string,dispatch)
  },[])

  return (
    <div>{data?.email}</div>
  )
}

export default Account