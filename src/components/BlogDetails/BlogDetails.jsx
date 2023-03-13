import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './blogdetails.css';

const BlogDetails = () => {
    const [targetBlog, setTargetBlog] = useState()
    const { title } = useParams()
    useEffect(() => {
        const getBlog = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`)
            if (response) {
                let blogs = await response.json()
                let filterBlog = blogs?.articles.filter((blog) => {
                    return blog.title == title
                })

                setTargetBlog(filterBlog)
            }
        }
        getBlog()
    }, [title])

    return (
        <>
            <div className="blogDetails-container">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="blogDetails">
                                {
                                    targetBlog ? targetBlog.map((elem) => {
                                        const { author, content, title, url, publishedAt, source, urlToImage } = elem
                                        return (
                                            <>
                                                <img src={`${urlToImage}`} class="img-fluid" alt="" />
                                                <div className="info mt-3">
                                                    <Link to='/'><span className='date'><i class="fa-regular fa-calendar-check pe-1"></i>{publishedAt}</span></Link>
                                                    <Link to='/'><h3 className='title'>{title}</h3></Link>
                                                    <div className="auth-info">
                                                        <span>Post: {source?.name}</span>
                                                        <span>Author: {author}</span>
                                                    </div>
                                                    <p className='disc'>{content}</p>
                                                    <a href={`${url}`} className='redmore-btn'>Read More</a>
                                                </div>
                                            </>
                                        )
                                    })
                                     :
                                    'Posts Not Found'
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h3>Blog Sidebar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;


