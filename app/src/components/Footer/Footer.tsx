import React from 'react'
import { FooterElement,FooterContainer,FooterOptionStyle } from '../styles'
import { InitialStateType } from '../../Redux/state'
import { useSelector } from 'react-redux'
import { FooterList } from './FooterList'

const Footer: React.FC = () => {
  const theme = useSelector((state:InitialStateType)=>state.theme)
  return (<FooterContainer theme={theme}>
      <FooterElement>
        {FooterList.column_0.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle} key={option}>{option}</h4> : <p style={FooterOptionStyle} key={option}>{option}</p>)}
      </FooterElement>
      <FooterElement>
        {FooterList.column_1.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle} key={option}>{option}</h4> : <p style={FooterOptionStyle} key={option}>{option}</p>)}
      </FooterElement>
      <FooterElement>
        {FooterList.column_2.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle} key={option}>{option}</h4> : <p style={FooterOptionStyle} key={option}>{option}</p>)}
      </FooterElement>
  </FooterContainer>
  )
}

export default Footer