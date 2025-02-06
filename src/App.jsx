import './App.css'
import Adduser from './components/addUser'
import Edituser from './components/editUser'
import UserList from './components/userList'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<UserList/>
  },
  {
    path:'add',
    element:<Adduser/>
  },
  {
    path:'edit/:id',
    element:<Edituser/>
  }
])
function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
