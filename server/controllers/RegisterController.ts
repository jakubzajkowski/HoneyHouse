import { Request, Response } from 'express';
import prisma from '../prisma/db';
import bcrypt from 'bcrypt'

interface RegisterControllerBodyType {
    first_name: string
    last_name: string
    email: string
    password: string
}

const RegisterController = async (req:Request,res:Response)=>{
    const saltRounds:number = 10
    const {first_name,last_name,email,password}:RegisterControllerBodyType = req.body
    console.log(first_name,last_name,email,password)
    try{
       if (first_name && last_name && email && password) {
        const userUniqueCheck = await prisma.user.findFirst({where:{email:email}})
        if (!userUniqueCheck){
            const hash = bcrypt.hashSync(password, saltRounds);
            await prisma.user.create({data:{first_name,last_name,email,password:hash}})
            res.status(200).json({success: 'Register success'})
        }
        else throw "This email is already used!"
       }
       else throw "Fill all fields"
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default RegisterController