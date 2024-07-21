import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL,GETPRODUCT} from "../api/end-points";
import type {ProductData } from "../types/Product";




export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
  getProducts: builder.query<ProductData[],void>({
      query: () => {
        return {
          url: GETPRODUCT,
          method: "GET",
        };
      },
      keepUnusedDataFor: 0,
      providesTags: ["Products"]
    }),
  }),
});

export const { useGetProductsQuery } = productApi;