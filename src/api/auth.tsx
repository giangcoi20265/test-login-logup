import {ISignin,ISignup} from "../interfaces/auth"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

const authApi= createApi({
    reducerPath:"auth",
    tagTypes:['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl:`http://localhost:3000`
    }),
    endpoints:(builder)=>({
        login : builder.mutation<ISignin, void>({
        query:(user)=>({
            body: user,
            method:"POST",
            url:`/signin`
        }),
        invalidatesTags:['Auth']
        }),
        logup: builder.mutation<ISignup, void>({
            query:(user)=>({
                body: user,
                method:"POST",
                url:`/signup`
            }),
            invalidatesTags:['Auth']
        })

    })
})

export const{
    useLoginMutation,
    useLogupMutation
}= authApi

export default authApi
export const Authreducer= authApi.reducer