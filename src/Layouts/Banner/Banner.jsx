import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner'>
          <div className="container">
             <div className="row">
                <div className="col-lg-6 col-sm-12 bannerContent">
                   <h2>Big Sale <span>Today!</span></h2>
                   <p>Don't Compromise on style! get Flat 30% Off For new Arrivals</p>
                   <button className='py-4 px-5'><Link to="/shop">Shop Now</Link></button>
                </div>
             </div>
          </div>
        </div>
    );
};

export default Banner;