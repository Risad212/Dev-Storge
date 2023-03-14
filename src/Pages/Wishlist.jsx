import React, { useContext } from 'react';
import { StrogeData } from  '../components/context/Context';
import WishProduct from '../components/wishProduct/wishProduct';

const Wishlist = () => {
    const {wishProduct,} = useContext(StrogeData)
    const [wishItem, setWishItem] = wishProduct

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