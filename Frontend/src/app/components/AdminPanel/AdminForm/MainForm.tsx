import React from "react"
import { useFormContext } from "react-hook-form"
import { ProductFormData } from "./ProductFormData"
const MainForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2  text-gray-900 text-left font-bold text-lg font-mono"
        >
          Name:
        </label>
        <input
          type="text"
          {...register("name", { required: "This field is required" })}
          className=" border border-cyan-500 text-gray-900 text-sm rounded-md  focus:border-cyan-800 block w-1/3 p-2.5"
          required
        />
    </div>
    <div className="mb-6">
      <label className="text-gray-900 text-lg font-bold block mb-4 text-left font-mono ">
          Description:
          </label>
          <textarea
            rows={5}
            className="block border rounded-md  w-1/2 py-1 px-2 font-normal focus:border-cyan-800 border-cyan-500 p-2.5"
            {...register("description", { required: "This field is required" })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
      
      </div>

      <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 font-bold text-gray-900  text-left text-lg p-2.5 font-mono mr-10"
            
          >
            Price:
          </label>
          <input
            type="number"
            min={1}
            placeholder="AED"
            className=" border  text-gray-900 text-sm rounded-md focus:border-cyan-800 border-cyan-500 block w-1/3 p-2.5 " 
            {...register("price", { required: "This field is required" })}
            required
          />
              {errors.price && (
         <span className="text-red-500">{errors.price.message}</span>
       )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="stock"
            className="block mb-2 font-bold text-gray-900  text-left text-lg p-2.5 font-mono mr-10"
            
          >
            Stock:
          </label>
          <input
            type="number"
            min={1}
            
            className=" border  text-gray-900 text-sm rounded-md  focus:border-cyan-800 border-cyan-500 block w-1/3 p-2.5 " 
            {...register("stock", { required: "This field is required" })}
            required
          />
              {errors.stock && (
         <span className="text-red-500">{errors.stock.message}</span>
       )}
        </div>
    </div>
    </>
  )
}

export default MainForm
