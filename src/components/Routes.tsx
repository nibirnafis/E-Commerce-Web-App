import Link from 'next/link';
import React, { useState } from 'react';


const Routes = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <div className='hidden md:flex gap-8 font-inter text-exsml tracking-[.1rem] text-cyan'>
            {/* <Link href="/">HOME</Link> */}
            <Link href="/products">PRODUCTS</Link>
            <Link href="/cart">CART</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
        </div>
        <div className='flex flex-col items-end md:hidden relative'>
            {
                !isOpen ?
                <button onClick={handleOpen}>{"<"}</button>
                :
                <button onClick={handleOpen}>{"v"}</button>
            }
            <div className={!isOpen ? "hidden" : "flex flex-col absolute top-4 bg-black gap-4 p-4 rounded-l"}>
                <Link href="/products">PRODUCTS</Link>
                <Link href="/cart">CART</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/contact">CONTACT</Link>
            </div> 
        </div>
        </>
    );
};

export default Routes;