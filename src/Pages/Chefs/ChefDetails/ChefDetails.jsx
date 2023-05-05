import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import Rating from 'react-rating';
import '@smastrom/react-rating/style.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ChefDetails = () => {
  const detailInfo = useLoaderData();
  const { id } = useParams();
  const [detail, setDetail] = useState(detailInfo);
  const [chef, setChef] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://server-minjucse.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setChef(data)
      );
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('shopping-cart'));
    if (items) {
      setCart(items);
    }
  }, []);

  const handleAddToCart = (did) => {

    let newCart = [];
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);

    if (shoppingCart != null) {
      const exists = shoppingCart.find(pd => pd === did);

      if (!exists) {

        newCart = [...cart, did];
        localStorage.setItem('shopping-cart', JSON.stringify(newCart));
      }
      else {
        toast.error("You Have Already Aplied!");
      }
    }
    else {
      newCart = [...cart, did]
      localStorage.setItem('shopping-cart', JSON.stringify(newCart));
    }
  }
  return (
    <div className="container">
      <div className="checf-banner d-flex justify-content-evenly align-items-center">
        <div className="banner-info text-center">
          <h1 className="banner-section-title">
            {chef.name}
          </h1>
          <p>
            {chef.description}
          </p>
          <p>
            <strong>Experiences: </strong>{chef.experiences}
          </p>
          <p>
            <strong>Number Of Recipe: </strong>{chef.numberOfRecipe}
          </p>
          <p>
            <span> <strong>Likes: </strong>{chef.likes}</span>
          </p>
        </div>
        <div className='banner-imgage'>
          <img src={chef.image_url} alt="" />
        </div>
      </div>
      <div className=" heading-section text-center mx-auto mb-5 mt-5">
        <h2 className="section-heading">Some Famous Receipies</h2>

      </div>
      <div className="row d-flex">
        {
          detail.map((item, index) => (

            <div className="col-md-4 mb-4" key={index}>
              <div className='card h-100'>
                <img className="card-img-top" src={item.image_url} alt=""></img>
                <div className="card-body">
                  <h5 className="card-title"> {item.recipe_name}</h5>
                  <p className="card-text"><strong>Ingredients: </strong>{item.ingredients} </p>
                  <div className='info-area mb-3'>
                    <span><strong>Method of Cooking:: </strong>{item.cooking_method}</span>
                  </div>
                  <div className='flex-grow-1 d-flex align-items-center mb-4'>
                    {/* <Rating
                      style={{ maxWidth: 150 }}
                      value={Math.round(item?.rating || 0)} readOnly /> */}
                    <Rating
                      placeholderRating={item.rating} readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    >

                    </Rating>

                    <span className='ms-2'> {item?.rating}</span>
                  </div>
                  <button className='btn btn-outline-primary'>Favourite</button>
                </div>
              </div>
            </div>
          ))}

      </div>

    </div>
  )
}

export default ChefDetails;