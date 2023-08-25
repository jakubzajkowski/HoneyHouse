import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Main,Header } from './styles'

const Home:React.FC = () => {
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