import React from 'react';
import { Link } from 'react-router-dom';
import './blogdetails.css';

const BlogDetails = () => {
    return (
        <>
            <div className="blogDetails-container">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-8">
                            <div className="blogDetails">
                                <img src="https://demo.themefreesia.com/shoppingcart/wp-content/uploads/sites/47/2019/03/ring-necklace-jewellery-silver-earrings-gem-1287223-pxhere.jpg" class="img-fluid" alt="" />
                                <div className="info mt-3">
                                   <Link to='/'><span className='date'><i class="fa-regular fa-calendar-check pe-1"></i>MARCH 22, 2019</span></Link>
                                   <Link to='/'><h3 className='title'>Most Awesome Breathtaking Places</h3></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;