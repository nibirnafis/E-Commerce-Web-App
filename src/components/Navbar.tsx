'use client'
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';
import Routes from './Routes';
import ThemeButton from './ThemeButton';



const Navbar = () => {
    return (
        <nav className='bg-blue sticky top-0 z-1'>
            <div className='reponsive navbar'>
                <Link href="/">
                    <p className='font-ironManOfWar text-med'>CLORR</p>
                </Link>
                <Routes></Routes>
                <ThemeButton></ThemeButton>
                {/* <SearchBar></SearchBar> */}
            </div>
        </nav>
    );
};

export default Navbar;