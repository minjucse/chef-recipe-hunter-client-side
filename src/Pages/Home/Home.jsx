import React from 'react'

import bannerImage from '../../assets/banner.jpg'
import ChefList from '../Chefs/ChefList/ChefList'

const Home = () => {
  return (
    <div className="home-container row">
      <div className="container d-flex">
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
    </div>
  )
}

export default Home