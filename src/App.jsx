import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Liste from "./components/listUser"
import { AddUser } from "./components/addUser"
import { Update } from "./components/updateUser"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Liste/>
  },
  {
    path:'/add',
    element:<AddUser/>
  },
  {
    path:'/up/:id',
    element:<Update/>
  }
])

function App () {
  return(
    <RouterProvider router={router}/>
  )
}

export default App