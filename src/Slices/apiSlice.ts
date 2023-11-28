import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interfaces/interfaces';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://server-shop-co.onrender.com/'}),
    tagTypes: ["Products", 'Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'product',
            providesTags: ['Products'],
        }), 
        getProduct: builder.query<IProduct, any>({
            query: ({ id }) => `product/${id}`,
            providesTags: ['Product']
        }),
    })
})

export const {useGetProductsQuery, useGetProductQuery} = apiSlice;