"use client"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP)


const HeroSection = () => {
    const container = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl
        .to(".c1", {
            opacity: 1,
            // duration: 1
        })
        .to(".c2", {
            opacity: 1,
            // duration: 1
        })
        .to(".c3", {
            opacity: 1,
            // duration: 1
        })

    }, {scope: container})
    
        /* ".box", { y: 10 })
    }, { scope: container } */


    return (
        <div ref={container} className='flex flex-col md:flex-row mx-auto gap-8 max-w-[1440px] px-8 pb-24'>
            <div className='c1 opacity-0 overflow-clip w-full h-[512px] rounded-4xl'>
                <Image
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dcny80yei/image/upload/v1763793049/cover_photo_1_pbirjn.png"
                    alt="Cover Picture 1"
                    width={1024}
                    height={512}>
                </Image>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='c2 opacity-0 overflow-clip w-full h-24 rounded-4xl'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764086349/cover_photo_3_xvdt2u.png"
                        alt="Cover Picture 2"
                        width={1024}
                        height={512}>
                    </Image>
                </div>
                <div className='c3 opacity-0 overflow-clip w-full h-96 rounded-4xl'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764086351/cover_photo_2_pgcomr.png"
                        alt="Cover Picture 3"
                        width={1024}
                        height={768}>
                    </Image>
                </div>
            </div>   
        </div>
    );
};

export default HeroSection;