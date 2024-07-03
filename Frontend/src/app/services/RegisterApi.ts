import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL, REGISTER } from "../api/end-points";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RegistrationFormData,RegisterResponse } from "../types/Register"

export const registerApi = createApi({
  reducerPath: "registerApi",
  tagTypes: ["SignUp"],
  
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<RegisterResponse, Partial<RegistrationFormData>>({
      query: (data) => ({         
          url: REGISTER,
          method: "POST",
          body: data,
          keepUnusedDataFor: 0,
        })

      }),
    
    }),

  })


export const { useSignUpMutation } = registerApi;