import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Home from './Pages/Home';
import Search from './Components/Search';
import Header from './Components/Header';
import Register from './Pages/Register';
import Write from './Pages/Write';
import Login from './Pages/Login';
import Blogs from './Components/Blogs.jsx';
import Singel from './Pages/Singel';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Aboutus from './Pages/Aboutus';
import LandingPage from './Pages/LandingPage';
import Logout from './Pages/Logout.jsx';
import CreatePost from './Pages/CreatePost.jsx';
import './App.css';
import './styel.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

function App() {
  const [isAuth , setIsAuth] = useState(false); // Define setIsAuth here

 

  const Layout = () => {
    let navigate = useNavigate()

    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <>
              <Search />
              <Home />
            </>
          )
        },
        {
          path:'/post/:id',
          element: <Singel />,
        },
        {
          path:'/write',
          element: <Write />,
        },
        {
          path:'/aboutus',
          element: <Aboutus />,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login setIsAuth={setIsAuth} />, // Pass setIsAuth as a prop
    },
    {
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "/logout",
      element: <Logout setIsAuth={setIsAuth} />, // Pass setIsAuth as a prop
    },
    {
      path: "/creatpost",
      element: <CreatePost isAuth={isAuth}/>,
    },
    
  ]);

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
