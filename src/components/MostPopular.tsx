import Image from 'next/image';
import React from 'react';

const MostPopular = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-8 max-w-[1440px] px-8 pb-24'>
            
            <div className='flex flex-col justify-end w-full m-auto relative'>
                <div className='bg-blue flex flex-col w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pt-6 text-cyan text-sml'>TROUSERS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764182646/product_pant_1_n1s9bs.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={512}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-start w-full m-auto relative'>
                <div className='bg-blue flex flex-col-reverse w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pb-6 text-cyan text-sml'>PANTS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764184447/product_pants_1_lvndsa.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-end w-full m-auto relative'>
                <div className='bg-blue flex flex-col w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pt-6 text-cyan text-sml'>JEANS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764182646/product_jeans_1_pi4fmw.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-start w-full m-auto relative'>
                <div className='bg-blue flex flex-col-reverse w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pb-6 text-cyan text-sml'>SHIRTS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764182647/product_shirt_1_nsks6z.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-end w-full m-auto relative'>
                <div className='bg-blue flex flex-col w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pt-6 text-cyan text-sml'>JACKETS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764182646/product_jacket_1_egqxrc.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-start w-full m-auto relative'>
                <div className='bg-blue flex flex-col-reverse w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pb-6 text-cyan text-sml'>T-SHIRTS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764182646/product_t-shirt_1_apohoj.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            {/* <div className='flex flex-col justify-end w-full m-auto relative'>
                <div className='bg-blue flex flex-col w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pt-6 text-cyan text-sml'>HOODIES</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764184446/product_hoodie_1_gp2ja4.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-start w-full m-auto relative'>
                <div className='bg-blue flex flex-col-reverse w-full h-[512px] rounded-4xl'>
                    <p className='text-center font-inter pb-6 text-cyan text-sml'>JOGGERS</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-4xl absolute'>
                    <Image
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dcny80yei/image/upload/v1764184471/product_jogger_1_tadlru.png"
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div> */}

        </div>
    );
};

export default MostPopular;