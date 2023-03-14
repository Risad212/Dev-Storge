import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';


const Products = () => {
  const [item, setItem] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [filter, setFilter] = useState(item)
  
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setItem(response.data)
        setFilter(response.data)
      }
      catch{
        setIsLoading(false)
      }
    }
    getProduct()
  }, [])

  const filterProduct = (cat) => {
    const updateList = item.filter((elem) => elem.category === cat)
    setFilter(updateList)
  }
  return (
    <div className='shop'>
      <div className='container'>
        <h2>Latest Products</h2>
        <hr />
        <ul>
          <li className='btn btn-outline-dark me-2' onClick={() => setFilter(item)}>All</li>
          <li className='btn btn-outline-dark me-2' onClick={() => filterProduct(`men's clothing`)}>Men's Clothing</li>
          <li className='btn btn-outline-dark me-2' onClick={() => filterProduct(`women's clothing`)}>Women Clothing</li>
          <li className='btn btn-outline-dark me-2' onClick={() => filterProduct(`jewelery`)}>Jewelery</li>
          <li className='btn btn-outline-dark me-2' onClick={() => filterProduct(`electronics`)}>Electronic</li>
        </ul>
        <div className="row mt-4">
          {
            item ?
            filter.map((product) => {
                return (
                  <>
                    <Product item={product} key={product.id}/>
                  </>
                )
              })
              :
              'Proudct Not Found'
          }
        </div>
      </div>
    </div>
  );
};

export default Products;