import React, { useContext, useEffect, useState } from 'react';
import './AddToCartProuduct.css'
import {StrogeData} from '../context/Context';

const AddToCartProduct = ({ cartProduct,cartTotal }) => {
   const {product} = useContext(StrogeData);
    const [cartCount, setCartCount] = product
   const [count, setCount] = useState(1)
   const [sign, setSign] = useState(null);


   const removeItem = (id) => {
     const filterItem = cartCount.filter((elem) => {
          return elem.id !== id;
     })
     setCartCount(filterItem)
   }
  
   useEffect(() => {
      cartTotal(Math.floor(cartProduct.price),sign);
   },[count])

   return (
      <div className='addToCartProduct d-flex'>
         <img src={cartProduct?.image} style={{ height: '150px', width: '120px' }} alt={cartProduct?.title} />
         <div className='ms-5'>
            <div className='d-flex justify-content-evenly'>
               <h5>{cartProduct?.title}</h5>
               <h5 className='ms-5 remove-item' onClick={(e) => removeItem(cartProduct?.id)}><i class="fa-solid fa-xmark"></i></h5>
            </div>
            <p>Price: ${cartProduct?.price}</p>
            <div className='input d-flex align-items-center'>
               <button onClick={() => {
                  if (count >= 2) {
                     setCount(count - 1);
                     setSign('minus')
                  } else {
                     setCount(count);
                     setSign('minus')
                  }
               }}>-</button>
               <span>{count}</span>
               <button onClick={() => [setCount(count + 1),setSign('plus')]}>+</button>
            </div>
         </div>
      </div>
   );
};

export default AddToCartProduct;