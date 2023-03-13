import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/header/Header';
import Blog from '../../Pages/Blog';
import Cart from '../../Pages/Cart';
import Home from '../../Pages/Home';
import Shop from '../../Pages/Shop';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import NotFound from '../NotFound/NotFound';
import ProductDetails from '../productDetails/ProductDetails';
import Contact from '../../Pages/Contact';
import BlogDetails from '../BlogDetails/BlogDetails';

const Router = () => {
    return (
        <BrowserRouter>
           <Header />
           <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blogdetails' element={<BlogDetails />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/product/category/:catname' element={<CategoryDetails />} />
              <Route path='*' element={<NotFound />} />
           </Routes>
           <Footer />
        </BrowserRouter>
    );
};

export default Router;