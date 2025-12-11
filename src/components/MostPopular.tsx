"use client"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Popular from './Popular';


gsap.registerPlugin(useGSAP)



const MostPopular = () => {

    const [ Populars, setPopulars ] = useState([])

    useEffect(()=>{
        
        async function loadPopulars(){
            const res = await fetch("/populars.json")
            const data = await res.json()
        
            setPopulars(data)
        }

        loadPopulars()
    }, [])



    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-4 md:gap-8 max-w-[1440px] px-8 pb-16 md:pb-24'>
            {
                Populars.map((p, key)=> <Popular p={p} key={key}></Popular>)
            }
        </div>
    );
};

export default MostPopular;
