import React from 'react'
import { FooterElement,FooterContainer,FooterOptionStyle } from '../Nav/styles'
import { FooterList } from './FooterList'

const Footer: React.FC = () => {
  return (<FooterContainer>
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