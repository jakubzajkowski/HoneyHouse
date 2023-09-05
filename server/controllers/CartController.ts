import { Request, Response } from 'express';
import prisma from '../prisma/db';

const CartController = async (req:Request,res:Response)=>{
    try{
        if (req.params.id) {
            const Cart = await prisma.cart.findMany({where:{userId: req.params.id}})
            if (Cart){
                return res.status(200).json(Cart)
            }
            else{
                throw "Cart not found"
            }   
        }
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default CartController