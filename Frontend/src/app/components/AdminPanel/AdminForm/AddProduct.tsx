import React from "react";
import MainForm from "./MainForm";
import SecondForm from "./SecondForm";
import { FormProvider, useForm } from "react-hook-form";
import { ProductFormData } from "./ProductFormData";

type Props = {
  onSave:(ProductFormData:FormData)=>void
 }

const AddProduct = () => {
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct