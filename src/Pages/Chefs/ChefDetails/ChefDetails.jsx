import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from "react-toastify";


const ChefDetails = () => {
  const detailInfo = useLoaderData();
  const [detail, setDetail] = useState(detailInfo);

  const [cart, setCart] = useState([]);
  
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
    else{
      newCart = [...cart, did]
      localStorage.setItem('shopping-cart', JSON.stringify(newCart));
    }
  }
  return (
    <div className="container">

      <div className=" heading-section text-center mx-auto mb-5 mt-5">
        <h2 className="section-heading">Some Famous Receipies</h2>
        
      </div>
      <div className="row d-flex">
        {
          detail.map((item, index) => (

            <div className="col-md-4 mb-4" key={index}>
              <div className="featured-entry align-self-stretch rounded">
                <div className='featured-img'>
                  <img src={item.image_url} alt="" />
                </div>

                <div className="text mt-3">
                  <h3 className="sub-heading">
                    {item.recipe_name}
                  </h3>
                  <p className='description'><strong>Ingredients: </strong>{item.ingredients} </p>
                </div>
                
                <div className='info-area mb-3'>
                  <span><strong>Method of Cooking:: </strong>{item.cooking_method}</span>
                  
                </div>
                <div className='button-area  mt-3'>
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