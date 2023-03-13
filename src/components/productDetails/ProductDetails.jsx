import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Rating from '../rating/Rating';
import { StrogeData } from '../context/Context';

const ProductDetails = () => {
    const [cartCount, setCartCount] = useContext(StrogeData)
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
      const getProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
      }
      getProduct()
    }, [id])
    const addToCart = () => {
        if (cartCount) {
            let filterData = cartCount.filter((elem) => {
                return elem.id !== product?.id
            })
            setCartCount([...filterData, product])
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
                            <img src={product?.image} alt="" className='w-25' />
                            <div className='productInfo'>
                                <h3>{product?.title}</h3>
                                <p>{product?.description}</p>
                                <span>${product?.price}</span>
                                <Rating star={product?.rating?.rate} />
                                <p className='mt-2 mb-2'>{product?.rating?.count} Customer Reviews</p>
                                <p>Category: {product?.category}</p>
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