import React from 'react';
import './Bookmarks.css'
import Bookmark from '../Bookmark/Bookmark';
import Time from '../Timezone/Time';

const Bookmarks = ({ bookMarks,readTime }) => {
    // console.log(Bookmarks);
    return (
        <div className='md:w-1/3 space-y-3 bg-[rgba(17,17,17,.5)] p-5'>
            <Time readTime={readTime}></Time>

            <h2 className='text-4xl text-center font-semibold'>Bookmarked Blogs:{bookMarks.length}</h2>
            {
                bookMarks.map((bookMark,idx) => <Bookmark
                    key={idx} bookMark={bookMark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;