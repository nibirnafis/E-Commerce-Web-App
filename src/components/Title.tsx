"use client"

import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap';
import React, { useRef } from 'react';


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin) 


const Title = ({t1, t2}: { t1: string, t2: string}) => {

    const container = useRef(null)

    
    useGSAP(()=>{

        gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center"
            }
        })
        .to(".txt1", {
            duration: 2, 
            ease: "power1.in",
            scrambleText: t1
        })
        .to(".txt2", {
            duration: 2, 
            ease: "power1.in",
            scrambleText: t2
        })
        
    }, {scope: container})



    return (
        <div ref={container} className='section-text'>
            <h1 className='txt1'> </h1>
            <h6 className='txt2'> </h6>
        </div>
    );
};

export default Title;