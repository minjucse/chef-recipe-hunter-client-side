import React from 'react'

import bannerImage from '../../assets/banner.jpg'
import ChefList from '../Chefs/ChefList/ChefList'

const Home = () => {
  return (
    <div className="home-container row">
      <div className="container d-md-flex justify-content-evenly align-items-center">
        <div className="banner-info">
          <h1 className="banner-section-title">
            Welcome to the our Delicious Food for test.

          </h1>
          <p>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className='btn btn-primary btn-lg added-bg-btn'>Get Started</button>

        </div>
        <div className='banner-imgage'>
          <img src={bannerImage} alt="" />
        </div>
      </div>
      <div className="row featured-section">
        <ChefList></ChefList>

      </div>

      <div className='container'>
        <div className=" heading-section text-center mx-auto mb-5 mt-5">
          <h2 className="section-heading">Our Famous Receipie </h2>

          <p className='heading-description'>Explore thousands of recipe opportunities with all the information you need</p>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 mb-4">
            <div className='Receipie-img'>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="" />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className='Receipie-img'>
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className='Receipie-img'>
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80" alt="" />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className='Receipie-img'>
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home