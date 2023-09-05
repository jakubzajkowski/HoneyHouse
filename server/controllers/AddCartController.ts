import { Request, Response } from 'express';
import prisma from '../prisma/db';

interface AddCartControllerBodyType {
    userId: string
    product_category: string
    product_id: string
    price: number
}

const AddCartController = async (req:Request,res:Response)=>{
    const {userId,price,product_category,product_id}:AddCartControllerBodyType=req.body
    try{
        await prisma.cart.create({data:{userId,price,product_category,product_id}})
        return res.status(200).json({Success: 'Added to Cart'})
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default AddCartController