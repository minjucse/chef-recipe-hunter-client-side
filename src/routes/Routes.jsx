import React from "react";

import { createBrowserRouter } from "react-router-dom";
import PageNotFount from "../Pages/PageNotFount/PageNotFount";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";



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
        }
  
      ]
    },
  ]);

  export default router;