import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';
import Routes from './Routes';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <Link href="/" className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt="A2Z"
                    width={36}
                    height={36}
                    className='w-6 h-6 md:w-9 md:h-9'
                />
                <p className='font-bold '>Fast Buy</p>
            </Link>
            <Routes></Routes>
            <SearchBar></SearchBar>
        </nav>
    );
};

export default Navbar;