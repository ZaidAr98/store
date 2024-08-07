import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL, LOGIN, LOGOUT } from "../api/end-points";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { LoginFormData,LoginResponse,LogoutResponse } from "../types/Login"

export const loginApi = createApi({
  reducerPath: "loginApi",
  tagTypes: ["Login"],
  
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Partial<LoginFormData>>({
      query: (data) => ({         
          url: LOGIN,
          method: "POST",
          body: data,
          keepUnusedDataFor: 0,
        })

      }),
    signOut:builder.mutation<LogoutResponse,void>({
      query: () => ({         
        url: LOGOUT,
        method: "POST",
      })
    })
    
    }),

  })


export const { useLoginMutation,useSignOutMutation } = loginApi;