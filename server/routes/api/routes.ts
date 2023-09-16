import express, { Router } from 'express';
import ProductsController from '../../controllers/ProductsController';
import CategoryController from '../../controllers/CategoryController';
import ProductController from '../../controllers/ProductController';
import RegisterController from '../../controllers/RegisterController';
import LoginController from '../../controllers/LoginController';
import { Auth } from '../../middlewares/Auth';
import UserController from '../../controllers/UserController';
import AddCartController from '../../controllers/AddCartController';
import CartController from '../../controllers/CartController';
import DeleteCartController from '../../controllers/DeleteCartController';
import UserInfoController from '../../controllers/UserInfoController';
import CheckoutController from '../../controllers/CheckoutController';

const api:Router = express.Router();

api.get('/products', ProductsController)
api.get('/products/:category', CategoryController)
api.get('/product/:id', ProductController)
api.post('/register', RegisterController)
api.post('/login', LoginController)
api.post('/add-cart', AddCartController)
api.get('/user', Auth, UserController)
api.get('/cart',Auth, CartController)
api.post('/delete-cart', DeleteCartController)
api.post('/user-info', UserInfoController)
api.post('/checkout', CheckoutController)


export default api