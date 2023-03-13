import React, { useEffect, useState } from 'react';
import ProductFilter from '../components/ProductFilter/ProductFilter';
import ShopProduct from '../components/ShopProduct/ShopProduct';

const Shop = () => {
   const [item, setItem] = useState([])
   const [allItem, setAllItem] = useState([])

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(json => {
            setItem(json)
            setAllItem(json)
         })
   }, [])

   // Filter  Data category wise 
   const getUniqueData = (category) => {
      if (category !== 'all') {
         let newValue = allItem.filter((elem) => {
            return elem.category === category
         })
         setItem(newValue)
      } else {
         setItem(allItem)
      }
   }


   // Filter Data search field
   const getSearchData = (searchText) => {
      if (searchText) {
         allItem.filter(item => item.title.toLowerCase().includes(searchText)).map(elem => {
            setItem([elem])
         })
      } else {
         setItem(allItem)
      }
   }


   // clear Input Field
   const clearInput = (input)=> {
      if(input){
         setItem(allItem)
      }
   }

   return (
      <>
         <div className="container my-5">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <ProductFilter getDataFun={getUniqueData} searchFilter={getSearchData} clearSearch={clearInput}/>
               </div>
               <div className="col-lg-8 col-md-8">
                  <div className="row">
                     <ShopProduct allProduct={item} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Shop;