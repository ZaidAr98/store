import React, { ChangeEvent } from "react"
import { useFormContext } from "react-hook-form"
import { ProductFormData } from "./ProductFormData"

const ImageForm: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  const imageUrl = watch("imageFile") as string | undefined

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (!fileList || fileList.length === 0) return

    const file = fileList[0]
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result as string

      // Update the form state with the new image URL
      setValue("imageFile", result)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="pb-24">
      
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Selected"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      )}
      <button className="border mt-3  text-gray-900 text-sm rounded-lg hover:border-cyan-500 bg-cyan-800 block w-1/5 p-2.5">
      <label
        htmlFor="imageFile"
        className="block mb-2 font-bold text-white  text-center text-lg  font-mono "
      >
        Upload Image
      </label>
      </button>
      <input
        type="file"
        id="imageFile"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {errors.imageFile && <p>{errors.imageFile.message}</p>}

    </div>
  )
}

export default ImageForm
