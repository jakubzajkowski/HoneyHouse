import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserAuth } from '../../Redux/Apis'
import { InitialStateType } from '../../Redux/state'
import { Main,AccountInfoBar,AccountSendInfo } from './styles'
import Nav from '../../components/Nav/Nav'

const Account:React.FC = () => {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const data = useSelector((state:InitialStateType)=>state.userData)

  useEffect(()=>{
    fetchUserAuth(token as string,dispatch)
  },[])

  if (data) return (
    <Main>
      <Nav />
      <AccountInfoBar>
        <h1>{data.first_name} {data.last_name}</h1>
      </AccountInfoBar>
      <AccountSendInfo>

      </AccountSendInfo>
    </Main>
  )
  else return <div>Not Authorized</div>
}

export default Account