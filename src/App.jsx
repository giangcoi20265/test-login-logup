import Button from "./componets/Button/Button"
import Formtest from "./componets/Form/Form"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
  }

export default App
