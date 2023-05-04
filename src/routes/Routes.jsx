import React from "react";

import { createBrowserRouter } from "react-router-dom";
import PageNotFount from "../Pages/PageNotFount/PageNotFount";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import { Register } from "../Pages/Login/Register/Register";



const router = createBrowserRouter([
    {
      path: "*",
      errorElement: <PageNotFount/>
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/sign-in',
          element: <Login></Login>
        },
        {
          path: '/sign-up',
          element: <Register></Register>
        },
  
      ]
    },
  ]);

  export default router;