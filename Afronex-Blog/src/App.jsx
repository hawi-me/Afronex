import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Search from './Components/Search'
import Header from './Components/Header'
import Register from './Pages/Register'
import Write from './Pages/Write'
import Login from './Pages/Login'
import Singel from './Pages/Singel'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import './App.css'
import './styel.scss'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const Layout = () =>  {
  return (<>
  <Header></Header>
  <Outlet></Outlet>
  <Footer></Footer>
  </>);

};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
      path:'/',
      element: (<><Search/>
      <Home/>
       
      </>  )

    },
   
    {
      path:'/post/:id',
      element: <Singel></Singel>
    },
    {
      path:'/write',
      element: <Write></Write>
    }

  ]
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
function App() {
  return (
    <div className='app'>
      <div className='container'>
      <RouterProvider router = {router}/>
      </div>
    </div>
    
    // {/* <Header></Header>
    // <Search></Search> */}
  )
}

export default App
