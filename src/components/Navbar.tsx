'use client'
import Link from 'next/link';
import React from 'react';
import Routes from './Routes';
import ThemeButton from './ThemeButton';
import Categories from './Categories';



const Navbar = () => {
    return (
        <>
        <nav className='bg-blue sticky top-0 z-1'>
            <div className='reponsive navbar'>
                <Link href="/">
                    <p className='font-ironManOfWar text-cyan text-med'>CLORR</p>
                </Link>
                <Routes></Routes>
                <ThemeButton></ThemeButton>
                {/* <SearchBar></SearchBar> */}
            </div>
        <Categories></Categories>
        </nav>
        </>
    );
};

export default Navbar;