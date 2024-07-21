import type React from 'react'
import type { ProductData } from '../types/Product'

interface ProductCardProps {
  product: ProductData
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={product.imageUrls}
        alt={product.name} // assuming product has a name field for the alt text
      />
    </>
  )
}

export default ProductCard