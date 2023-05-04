import React from "react";

import { createBrowserRouter } from "react-router-dom";
import PageNotFount from "../Pages/PageNotFount/PageNotFount";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import { Register } from "../Pages/Login/Register/Register";
import ChefDetails from "../Pages/Chefs/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <PageNotFount/>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            const loadedFeatureds = await fetch('https://server-minjucse.vercel.app/chef');
            return await loadedFeatureds.json();
          },
        },
        {
          path: '/chef-details/:id',
          element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://server-minjucse.vercel.app/chefDetail/${params.id}`)

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