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
              <div className='card'>
                <img className="card-img-top" src={item.image_url} alt=""></img>
                <div className="card-body">
                  <h5 className="card-title"> {item.name}</h5>
                  <p className="card-text"><strong>Experiences: </strong>{item.experiences}</p>
                  <div className='info-area mb-3'>
                    <span><strong>Number Of Recipe: </strong>{item.numberOfRecipe}</span>
                    <br />
                    <span> <strong>Likes: </strong>{item.likes}</span>
                  </div>
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