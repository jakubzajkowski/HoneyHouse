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
        <img src="https://honeyhouse.si/wp-content/uploads/2023/01/KremniBorovnica270.jpg" alt="" />
        <img src="https://pasiekalyson.pl/sklep/media/products/1017/images/3201/preview/miod-wielokwiatowy-z-malina.webp" alt="" />
      </Main>
    </div>
  )
}

export default Home