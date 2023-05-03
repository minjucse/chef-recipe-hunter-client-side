import React from "react";

import { createBrowserRouter } from "react-router-dom";
import PageNotFount from "../Pages/PageNotFount/PageNotFount";



const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <PageNotFount/>
    },
    
  ]);

  export default router;