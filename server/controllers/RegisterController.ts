import express, { Express, Request, Response } from 'express';
import prisma from '../prisma/db';

interface RegisterControllerBodyType {
    first_name: string
    last_name: string
    email: string
    password: string
}

const RegisterController =async (req:Request,res:Response)=>{
    const {first_name,last_name,email,password}:RegisterControllerBodyType = req.body
    try{
       
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default RegisterController