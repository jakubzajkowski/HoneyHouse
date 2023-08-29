import React from 'react'
import { FooterElement,FooterContainer,FooterOptionStyle } from '../styles'
import { FooterList } from './FooterList'

const Footer: React.FC = () => {
  return (<FooterContainer>
      <FooterElement>
        {FooterList.column_0.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle}>{option}</h4> : <p style={FooterOptionStyle}>{option}</p>)}
      </FooterElement>
      <FooterElement>
        {FooterList.column_1.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle}>{option}</h4> : <p style={FooterOptionStyle}>{option}</p>)}
      </FooterElement>
      <FooterElement>
        {FooterList.column_2.map((option,i)=>i == 0 ? <h4 style={FooterOptionStyle}>{option}</h4> : <p style={FooterOptionStyle}>{option}</p>)}
      </FooterElement>
  </FooterContainer>
  )
}

export default Footer