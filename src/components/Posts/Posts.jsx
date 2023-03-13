import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css'

const Posts = ({ posts,query }) => {
    return (
        <>
            {
                query ? posts.filter((post => post?.title.toLowerCase().includes(query))).map((elem) => {
                    const { urlToImage, publishedAt, content, title, author, source } = elem
                    return (
                        <>
                            <div className='singlePost mb-5'>
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <img src={urlToImage} alt="image" />
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <Link to="/"><span className='b-date'><i class="fa-solid fa-calendar-check pe-1"></i>{publishedAt}</span></Link>
                                        <Link to={'/' + title}><h3 className='b-title'>{title}</h3></Link>
                                        <div className="b-info mt-3">
                                            <span className='author'>post by: {source?.name}</span>
                                            <div className='d-flex'>
                                                <span className='me-2'><i class="fa-solid fa-user pe-1"></i>Author: {author}</span>
                                            </div>
                                        </div>
                                        <p className='mt-3'>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                :
               (
                posts ? posts.map((elem) => {
                    const { urlToImage, publishedAt, content, title, author, source } = elem
                    console.log(title);
                    return (
                        <>
                            <div className='singlePost mb-5'>
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <img src={urlToImage} alt="image" />
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <Link to="/"><span className='b-date'><i class="fa-solid fa-calendar-check pe-1"></i>{publishedAt}</span></Link>
                                        <Link to={'/blog/' + title}><h3 className='b-title'>{title}</h3></Link>
                                        <div className="b-info mt-3">
                                            <span className='author'>post by: {source?.name}</span>
                                            <div className='d-flex'>
                                                <span className='me-2'><i class="fa-solid fa-user pe-1"></i>Author: {author}</span>
                                            </div>
                                        </div>
                                        <p className='mt-3'>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                :
                'Post Not Found'
               )
            }
           
        </>
    );
};

export default Posts;

