import React from 'react'
import { useGetProductsQuery } from '../services/productApi'
import type { ProductData } from '../types/Product'
import ProductCard from '../components/ProductCard'
const Product = () => {

 

  const {data:products,isSuccess,isFetching,isLoading,error} = useGetProductsQuery()
  
  if(error){
    return(
      <div>Error:{error.toString()}</div>
    )
  }
  if(isLoading){
    return(<>
    <div>Loading...</div>
    </>)
  }
  if(isSuccess){
    return(
      <>{products ? (
        products.map((product: ProductData) => {
          return (
            <div className="w-full sm:w-2/3 md:w-1/4 p-2" key={product.id}>
              <ProductCard key={product.id} product={product}/>
            </div>
          );
        })
      ) : (
        "No Data Available"
      )}
      </>
    )
  }
}

export default Product



