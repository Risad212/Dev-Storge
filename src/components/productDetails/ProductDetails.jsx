import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Rating from '../rating/Rating';
import { StrogeData } from '../context/Context';

const ProductDetails = () => {
    const {product,wishCart} = useContext(StrogeData);
    const [cartCount, setCartCount] = product
    const { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
      const getProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setItem(data)
      }
      getProduct()
    }, [id])
    const addToCart = () => {
        if (cartCount) {
            let filterData = cartCount.filter((elem) => {
                return elem.id !== item?.id
            })
            setCartCount([...filterData, item])
        }else{
            setCartCount([...cartCount])
        }
    }
    return (
        <div className='producDetails'>
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className='d-flex'>
                            <img src={item?.image} alt="" className='w-25' />
                            <div className='productInfo'>
                                <h3>{item?.title}</h3>
                                <p>{item?.description}</p>
                                <span>${item?.price}</span>
                                <Rating star={item?.rating?.rate} />
                                <p className='mt-2 mb-2'>{item?.rating?.count} Customer Reviews</p>
                                <p>Category: {item?.category}</p>
                                <button className='btn btn-outline-dark mt-4 d-block' onClick={() => addToCart()}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;