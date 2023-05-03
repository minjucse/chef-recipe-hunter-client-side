import React from 'react'

import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <div >
        <div className='container'> 
        <Header></Header>
        </div>
        
        <div className='container'> 
            <Outlet></Outlet>
        </div>   
       

        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default Main