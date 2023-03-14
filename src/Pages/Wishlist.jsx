import React from 'react';
import WishProduct from '../components/WishProduct/WishProduct'

const Wishlist = () => {
    return (
        <div className='wishlist'>
           <div className="container">
               <div className="row">
                  <div className="col-lg-8 my-5">
                     <WishProduct />
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Wishlist;