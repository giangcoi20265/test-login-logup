import {createBrowserRouter, Navigate} from"react-router-dom"
import Sigin from "./pages/client/sigin"
import React from "react"
import Sigup from "./pages/client/sigup"
import Listproduct from "./pages/admin/Listproduct"
export const router= createBrowserRouter([

   {path:"/login", element:<Sigin/>},
   {path:"/register", element:<Sigup/>},

   {path:"/products", element:<Listproduct/>}
])