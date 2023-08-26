import React,{useEffect} from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,Header } from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { fetchTestData } from '../../Redux/Apis'

const Home:React.FC = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    console.log(state)
  })

  return (
    <div style={{width:'100%'}}>
      <Nav />
      <Main>
        <Header>Welcome to Honey House</Header>
      </Main>
    </div>
  )
}

export default Home