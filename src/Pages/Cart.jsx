import React, { useContext, useState } from 'react';
import {StrogeData} from '../components/context/Context';
import AddToCartProduct from '../components/AddToCartProduct/AddToCartProduct';
import CartSidebar from '../components/CartSidebar/CartSidebar';

const Cart = () => {
    const [cartCount,setCartCount] = useContext(StrogeData)
    const [pTAmount, setPTAmount] = useState()

    const cartTotal = (productAmount,sign,count) =>{
       let cartDetails = {
          amount: productAmount,
          sign: sign,
       }
       setPTAmount(cartDetails)
    }

    return (
        <div>
           <div className="container">
              <div className="row my-5">
                 <div className="col-lg-8 col-md-7">
                    {
                      cartCount?
                        cartCount.map((elem) => {
                            return(
                                <>
                                  <AddToCartProduct cartProduct={elem} key={elem.id}  cartTotal={cartTotal}/>
                                </>
                            )
                      })
                       :
                       <div>
                        <div className="col-12">
                            <Skeleton height={150} count={1} />
                        </div>
                      </div> 
                    }
                 </div>
                 <div className="col-lg-4 col-md-5">
                    <CartSidebar cartDetails={pTAmount}/>
                 </div>
              </div>
            </div>  
        </div>
    );
};

export default Cart;