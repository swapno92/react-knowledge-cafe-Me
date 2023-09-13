import profile from '../../../images/profile.png'
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 py-4 mb-4'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            {/* <img src="../../../images/profile.png" alt="" /> */}
            {/* ............................or........................... */}
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;