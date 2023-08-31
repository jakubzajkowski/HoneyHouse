import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Main } from '../styles'
import Nav from '../../../components/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateType } from '../../../Redux/state'
import { fetchProductData } from '../../../Redux/Apis'

const Product = () => {
    const { id } = useParams();
    const dispatch=useDispatch()
    const product = useSelector((state:InitialStateType)=>state.product)

    useEffect(() => {
        fetchProductData(id as string,dispatch)
      },[])

    return (
        <div style={{width:'100%'}}>
        <Main>

            <Nav />
        </Main>
        </div>
    )
}

export default Product