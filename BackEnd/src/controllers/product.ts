import prisma from "../lib/prisma";
import { Request, Response } from 'express';
import { ProductData } from "../models/product";
import cloudinary from "cloudinary"

export const addProduct  = async (req: Request, res: Response) => {
  
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
  }
  
  
    try {
      const {name,description,price,stock} = req.body;
      const imageFiles = req.files as Express.Multer.File[];
      const  imageUrl = await uploadImages(imageFiles)
    
      
      const newProduct = await prisma.product.create({
        data: {
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


  export const updateProduct = async (req: Request, res: Response) => {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
    }
    const { productId } = req.params;
    const { name, description, price,  imageUrl, stock } = req.body;
  
    try {
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
  
      if (!product) {
        return res.status(404).json({ message: "The product hasn't been found" });
      }
  
      const updatedProduct = await prisma.product.update({
        where: { id: productId },
        data: {
          name,
          description,
          price,
          imageUrl,
          stock,
        } as ProductData,
      });
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Error updating product" });
    }
  };



  export const deleteProduct = async (req: Request, res: Response) => {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
    }
    const { productId } = req.params;
    const { name, description, price,  imageUrl, stock } = req.body;
  
    try {
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
  
      if (!product) {
        return res.status(404).json({ message: "The product hasn't been found" });
      }
  
      const deletedProduct = await prisma.product.delete({
        where: { id: productId },
      });
  
      res.status(200).json({message:"the product is deleted successfully"});
    } catch (error) {
      console.error("Error deleting  product:", error);
      res.status(500).json({ message: "Error deleting product" });
    }
  };


  export const uploadImages = async (imageFiles: Express.Multer.File[]) => {
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    })}