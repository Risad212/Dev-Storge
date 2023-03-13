import React, { useEffect, useState } from 'react';
import './category.css';
import Men from '../../Media/men.webp';
import women from '../../Media/women.webp';
import Jewelery from '../../Media/jewelery.webp';
import electronics from '../../Media/electronics.webp';
import { Link } from 'react-router-dom';

const Category = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch('https://fakestoreapi.com/products/categories')
          if (response) {
            setProduct(await response.clone().json())
          }
        }
        getProduct()
      }, [])

    return (
        <div className='my-5'>
           <div className="container">
              <div className="row g-3">
                 {
                    product? product.map((elem) => {
                       return (
                          <>
                           <div className="col-lg-3 col-md-6 col-sm-12" key={elem}>
                              <div className="category-single">
                                <Link to={'/product/category/' + elem}>
                                 <div className='imgBox'>
                                 <img src={
                                   elem == `men's clothing`? Men:
                                   elem == `women's clothing`? women: 
                                   elem == 'jewelery'? Jewelery: 
                                   elem == 'electronics'? electronics: 
                                   'image not found'} alt={elem}/>
                                 </div>
                                 <h5 className='mt-2'>{
                                   elem == `men's clothing`? 'Men’s':
                                   elem == `women's clothing`? 'Women’s':
                                   (elem)
                                  }</h5>
                                  </Link>
                              </div>
                           </div>
                          </>
                       )
                    })
                    :
                    ''
                 }
              </div>
           </div> 
        </div>
    );
};

export default Category;