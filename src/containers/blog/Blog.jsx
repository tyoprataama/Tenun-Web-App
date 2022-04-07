import React from 'react'
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import Article from '../../components/article/Article';

const Blog = () => (
   <div className="tenun_blog section_padding" id="blog">
    <div className="tenun_blog-heading">
      <h1 className="gradient_text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="tenun_blog-container">
      <div className="tenun_blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Tenun and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="tenun_blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Tenun and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Tenun and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Tenun and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Tenun and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog