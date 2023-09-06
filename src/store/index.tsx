import {configureStore, Action, ThunkAction} from "@reduxjs/toolkit"
import authApi, { Authreducer } from "../api/auth"
import productApi , {ProductReducer} from '../api/product'



export const store= configureStore({
    reducer:{
        auth: Authreducer,
        products : ProductReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware, authApi.middleware)
})
export type RootSate = ReturnType<typeof store.getState>
export type AppDispath= typeof store.dispatch
export type AppThunk<ReturnType = void>= ThunkAction<
    ReturnType,
    RootSate,
    unknown,
    Action<string>
>
export default store
