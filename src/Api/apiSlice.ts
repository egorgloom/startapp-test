import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProducts } from './../interfaces/interfaces';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/products'}),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts[], any>({
            query: () => '',
            providesTags: ['Products'],
        })
    })
})

export const {useGetProductsQuery} = apiSlice;