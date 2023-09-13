import Blog from '../Blog/Blog';
import './Blogs.css'
import React, { useEffect, useState } from 'react';

const Blogs = ({ handleAddBookmark,handleMarkUsRead }) => {
    const [blogs, setBlogs] = useState([])
    // console.log(blogs);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3 space-y-3 '>
            <h2 className='text-4xl text-center mb-2'>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleMarkUsRead={handleMarkUsRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;