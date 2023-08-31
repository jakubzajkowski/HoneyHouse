"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const api = express_1.default.Router();
api.get('/products', ProductsController_1.default);
api.get('/products/:category', CategoryController_1.default);
api.get('/product/:id', ProductController_1.default);
exports.default = api;
