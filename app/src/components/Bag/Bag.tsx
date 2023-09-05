import React from 'react'
import { BagContainer,BagClose,BagBackground } from '../styles'

interface BagProps {
    setIsBag: React.Dispatch<React.SetStateAction<boolean>>
}

const Bag:React.FC<BagProps> = ({setIsBag}) => {
  return (<BagBackground onClick={()=>setIsBag(false)}>
        <BagContainer onClick={e => e.stopPropagation()} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{duration: 0.3,ease:'easeInOut'}}>
            <BagClose onClick={()=>setIsBag(false)}>Close</BagClose>
        </BagContainer>
    </BagBackground>
  )
}

export default Bag