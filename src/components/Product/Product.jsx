import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StrogeData } from '../context/Context';
import './Product.css';

const Product = ({ item}) => {
    let location = useLocation();
    const [cartCount, setCartCount] = useContext(StrogeData)
    const addToCart = () => {
          if(cartCount){
            let filterData = cartCount.filter((elem) => {
                return elem.id !== item.id
             })
             setCartCount([...filterData,item])
          }else{
            setCartCount([...item])
          }
    }
    return (
        <>
            <div className={`${location.pathname === '/shop'? 'col-lg-4': 'col-lg-3'} 
                             col-md-6 col-sm-12 mb-4`} key={item?.id}>
                <div class="card h-100 text-center p-4">
                    <Link to={'/product/' + item?.id}>
                        <img src={item?.image} class="card-img-top" alt={item?.title} height="250px" />
                    </Link>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{item?.title.substring(0, 12)}</h5>
                        <p class="card-text lead fw-bold">${item?.price}</p>
                        <button class="btn btn-outline-dark px-4" onClick={() => addToCart()}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;