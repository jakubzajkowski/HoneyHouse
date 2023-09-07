import { Request, Response } from 'express';
import prisma from '../prisma/db';

const CartController = async (req:Request,res:Response)=>{
    try{
        if (req.params.id) {
            const Cart = await prisma.cart.findMany({where:{userId: req.params.id}})
            const CartResponse = await Promise.all(Cart.map(async (item) => {
                const product =  await prisma.products.findFirst({where:{id:item.product_id}}) 
                return {...item,
                    img: product?.img,
                    name:product?.name,
                    desc:product?.desc,
                    weight: product?.weight
                }
            }
            ));
            if (Cart){
                return res.status(200).json(CartResponse)
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