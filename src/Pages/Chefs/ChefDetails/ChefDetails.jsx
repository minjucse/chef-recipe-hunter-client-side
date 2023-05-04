import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from "react-toastify";


const ChefDetails = () => {
  const detailInfo = useLoaderData();
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
    <div>ChefDetails</div>
  )
}

export default ChefDetails;