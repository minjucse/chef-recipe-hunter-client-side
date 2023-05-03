import React from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className='container'>
        <Header></Header>
                
        <Outlet></Outlet>

        <ToastContainer></ToastContainer>
    </div>
  )
}

export default Main