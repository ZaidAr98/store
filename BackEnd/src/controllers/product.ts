import prisma from "../lib/prisma";
import { Request, Response } from 'express';
import { ProductData } from "../models/product";
import {v2} from 'cloudinary'
import { promises } from "dns";



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const addProduct  = async (req: Request, res: Response) => {
    console.log(req.body)
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
  }
  
  
    try {
      const {name,description,price,stock} = req.body;
      const imageFiles = req.files as Express.Multer.File[];
      const  imageUrl = await uploadImages(imageFiles[0])
      const updatedAt = new Date()
      const createdAt  = new Date()
      if (!imageFiles || imageFiles.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
      }
      
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price : parseFloat(price) ,
          imageUrls: imageUrl, 
          stock: parseInt(stock),
          updatedAt:updatedAt,
          createdAt:createdAt
        },
      });
      
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const updateProduct = async (req: Request, res: Response) => {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ message: "Forbidden: You do not have the necessary permissions" });
    }
    const { productId } = req.params;
    const { name, description, price, stock } = req.body;
    const imageFiles = req.files as Express.Multer.File[];
    const  imageUrl = await uploadImages(imageFiles[0])
    const updatedAt =   new Date()
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
          price : parseFloat(price) ,
          imageUrls: imageUrl || product.imageUrls, 
          stock: parseInt(stock),
          updatedAt:updatedAt
        },
      });
     
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Error updating product" });
    }
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      console.error('Error in updateProduct:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const uploadImages = async (file: Express.Multer.File) : Promise<string> => {
    
    try {
      const {buffer, mimetype} = file; 
      const b64 = buffer.toString('base64');
      const res = await v2.uploader.upload(`data:${mimetype};base64,${b64}`, {folder: "any", resource_type: 'auto',format: mimetype.split('/')[1]});
      return res.secure_url;
    }catch(err){
      console.log(err)
      throw new Error("server error")
    }


  };