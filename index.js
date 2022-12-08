import dotenv from 'dotenv';
dotenv.config();
import productService from './src/routes/products';

console.log(productService())

