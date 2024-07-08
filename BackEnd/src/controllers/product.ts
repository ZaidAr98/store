import prisma from "../lib/prisma";
import { Request, Response } from 'express';
import { ProductData } from "../models/product";


export const addProduct  = async (req: Request, res: Response) => {
  
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
  }
    const { name, description, price, imageUrl, stock } = req.body;
  
    try {
      const newProduct = await prisma.product.create({
        data:<ProductData> {
          name,
          description,
          price,
          imageUrl,
          stock,
        },
      });
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  export const getProducts = async(req:Request,res:Response)=>{
    try {
      const products = await prisma.product.findMany({
        orderBy:{
          createdAt:"desc"
        }
      })
      res.json(products)
    } catch (error) {
      console.error("error", error);
      res.status(500).json({ message: "Error fetching products" });
    }
  }