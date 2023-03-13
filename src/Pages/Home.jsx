import React from 'react';
import Shop from '../components/Shop/Shop'
import Banner from '../Layouts/Banner/Banner';
import Newsletter from '../components/Newsletter/Newsletter';
import Category from '../components/Category/Category';

const Home = () => {
    return (
        <div>
           <Banner />
            <Category />
            <Shop />
           <Newsletter />
        </div>
    );
};

export default Home;