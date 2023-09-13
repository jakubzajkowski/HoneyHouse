import React from 'react'

interface CheckoutProductProps { 
    img : string
    name: string
    price : number
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({img,name,price}) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <img style={{width:'15%',padding:'0.5rem',borderRadius:'0.5rem',border:'1px solid grey',margin:'1rem 0.5rem'}} src={img} alt={name} />
        <p style={{fontWeight:'bold',fontSize:'0.8rem'}}>{name}</p>
        <p style={{fontWeight:'bold',fontSize:'1rem'}}>{price}0 &euro;</p>
    </div>
  )
}

export default CheckoutProduct