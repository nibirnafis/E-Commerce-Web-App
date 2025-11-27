import Image from 'next/image';
import React from 'react';



const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto gap-8 max-w-[1440px] px-8 pb-24'>
            <div className='overflow-clip w-full h-[512px] rounded-4xl'>
                <Image
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dcny80yei/image/upload/v1763793049/cover_photo_1_pbirjn.png"
                    alt="Cover Picture 1"
                    width={1024}
                    height={512}>
                </Image>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='overflow-clip w-full h-24 rounded-4xl'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764086349/cover_photo_3_xvdt2u.png"
                        alt="Cover Picture 2"
                        width={1024}
                        height={512}>
                    </Image>
                </div>
                <div className='overflow-clip w-full h-96 rounded-4xl'>
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