import React, { useEffect, useState } from 'react';
import BlogSidebar from '../components/BlogSIdebar/BlogSidebar';
import Pagination from '../components/pagination/Pagination';
import Posts from '../components/Posts/Posts';

const Blog = () => {
  const [sblog, setSBlog] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)
  const [queryPost,setQueryPost] = useState()

  useEffect(() => {
    const getBlog = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`)
      if (response) {
        setSBlog(await response.json())
      }
    }
    getBlog()
  }, [])

  // get Current Post
  const indexOffLastPost = currentPage * postPerPage
  const indexOffFirstPost = indexOffLastPost - postPerPage;
  const currentPosts = sblog?.articles?.slice(indexOffFirstPost, indexOffLastPost);

  // Change Page
  const paginate = (PageNumber) => setCurrentPage(PageNumber)

 const searchPost = (value) => {
    setQueryPost(value)
 }
  return (
    <div className='BlogPage'>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8 col-md-12">
            <Posts posts={currentPosts} query={queryPost}/>
            <Pagination postPerPage={postPerPage} totalPost={sblog?.articles?.length} paginate={paginate}/>
          </div>
          <div className="col-lg-4 col-md-12">
            <BlogSidebar searchPost={searchPost}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


