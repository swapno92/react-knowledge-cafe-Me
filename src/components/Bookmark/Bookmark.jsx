import React, { useEffect, useState } from 'react';
// import './Bookmark.css'

const Bookmark = ({ bookMark }) => {
    // const {title} = bookMarksTitle
    // console.log(bookMark);
const {title} = bookMark
    return (
        <div className='bg-white rounded-lg p-4'>
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;