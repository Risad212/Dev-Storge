import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './blogSidebar.css';

const BlogSidebar = ({searchPost}) => {
    const [psPost, setPsPost] = useState([1, 2, 3, 4])
    const [query,setQuery] = useState()

    searchPost(query)

    return (
        <div className='blogSidebar'>
            <input type="text" placeholder='Search...'  onChange={(e) => setQuery(e.target.value)}/>
            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
            {/* ---- popular Post -----*/}
            <div className="popularPost mt-5">
                <h3 className='title'>popular post</h3>
                <div className="p-s-post mt-3">
                    {
                        psPost ? psPost.map(() => {
                            return (
                                <>
                                    <div className="row mb-3">
                                        <div className="col-4 ">
                                            <img src="https://demo.themefreesia.com/shoppingcart/wp-content/uploads/sites/47/2019/03/ring-necklace-jewellery-silver-earrings-gem-1287223-pxhere.jpg" className='w-100' alt="" />
                                        </div>
                                        <div className="col-8">
                                            <Link to="/"><h5>10% Student Discount</h5></Link>
                                            <Link to="/"><span><i class="fa-regular fa-calendar pe-1"></i>March 21, 2019</span></Link>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                        :
                        'popural post not found'
                    }
                </div>
            </div>
            {/* ---- All Categories -----*/}
             <div className="mt-5">
                <h3 className='title'>CATEGORIES</h3>
                 <ul className='category-list'>
                    <li><Link to='/'>✜ Men</Link></li>
                    <li><Link to='/'>✜ Women</Link></li>
                    <li><Link to='/'>✜ jewellery</Link></li>
                    <li><Link to='/'>✜ electronics</Link></li>
                 </ul>
             </div>
        </div>
    );
};

export default BlogSidebar;