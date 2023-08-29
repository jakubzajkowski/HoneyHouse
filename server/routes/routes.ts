import express, { Express, Request, Response } from 'express';
import ProductsController from '../controllers/ProductsController';

const api = express.Router();

api.get('/products', ProductsController)

export default api