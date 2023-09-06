import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../interfaces/product";


const productApi = createApi({
    reducerPath: "products",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (build) => ({
        addproduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: '/products',
                body: product,
                method: "POST"
            }),
            invalidatesTags: ['Product']
        }),
        updateroduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: '/products/' + product.id,
                body: product,
                method: "PUT"
            }),
            invalidatesTags: ['Product']
        }),
        getproducts: build.query<IProduct[], void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        getproductById: build.query<IProduct, void>({
            query: (id) => `/products/` + id,
            providesTags: ['Product']
        }),
        deleteproduct: build.mutation<IProduct, number>({
            query: (id) => ({
                url: '/products/' + id,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        }),
    })
})

export default productApi;
export const {
    useGetproductByIdQuery,
    useUpdateroductMutation,
    useAddproductMutation,
    useDeleteproductMutation,
    useGetproductsQuery,
} = productApi
export const ProductReducer = productApi.reducer