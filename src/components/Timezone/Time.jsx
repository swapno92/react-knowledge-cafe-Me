import React from 'react';
import './Time.css'

const Time = ({readTime}) => {
    return (
        <div>
            <h2 className='text-2xl text-center bg-yellow-50 rounded-lg p-5'>Spent time on read : {readTime} min</h2>
        </div>
    );
};

export default Time;