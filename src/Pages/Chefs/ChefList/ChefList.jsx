import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefList = () => {
  const loadCart = useLoaderData();
  
  const [featured, setFeatured] = useState(loadCart);

  return (
    <div className="container">

      <div className=" heading-section text-center mx-auto mb-5 mt-5">
        <h2 className="section-heading">OUR SERVICES</h2>

        <p className='heading-description'>Explore thousands of recipe opportunities with all the information you need</p>
      </div>
      <div className="row d-flex">
        {
          featured.map((item, index) => (

            <div className="col-md-4 mb-4" key={index}>
              <div className="featured-entry align-self-stretch rounded">
                <div className='featured-img'>
                  <img src={item.image_url} alt="" />
                </div>

                <div className="text mt-3">
                  <h3 className="sub-heading">
                    {item.name}
                  </h3>
                  <p className='description'><strong>experiences: </strong>{item.experiences} </p>
                </div>
                
                <div className='info-area mb-3'>
                  <span><strong>Number Of Recipe: </strong>{item.numberOfRecipe}</span>
                  <br/>
                  <span> <strong>Likes: </strong>{item.likes}</span>
                </div>
                <div className='button-area  mt-3'>
                <Link className='btn btn-outline-primary' to={`/chef-details/${item.id}`}>View Recipes</Link>
                  
                </div>
              </div>
            </div>
          ))}

      </div>

    </div>
  )
}

export default ChefList