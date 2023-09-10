import { Request, Response } from 'express';
import prisma from '../prisma/db';

interface UserInfoControllerBodyType {
    first_name: string
    last_name: string
    email: string
    country: string
    address: string
    apartament: string
    postal_code: string
    city: string
    phone: string
}

const UserInfoController = async (req:Request,res:Response)=>{
    const {first_name,last_name,email,country,address,apartament,postal_code,city,phone}:UserInfoControllerBodyType=req.body
    try{
        await prisma.user.update({ where: {
            email: email,
          },
          data: {first_name,last_name,email,country,address,apartament,postal_code,city,phone}
        })
        return res.status(200).json({Success: 'Updated'})
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default UserInfoController