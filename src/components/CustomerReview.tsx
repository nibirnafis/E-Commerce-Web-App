import React from 'react';

const CustomerReview = () => {
    return (
        <div className='flex flex-col gap-8 m-auto font-inter tracking-[.1rem] max-w-[1440px] px-8 pb-24'>
            <div className='p-8 font-inter tracking-[.1rem] bg-blue rounded-4xl'>
                <p className='text-cyan text-reg pb-4'>NAFISUL HAQUE KHAN</p>
                <p className='text-orange text-sml pl-8'>“I ordered a pair of denim jeans and a cotton shirt—both exceeded my expectations! The fabric quality feels premium, and the fitting is perfect. Delivery was fast too. Definitely buying again.”</p>
            </div>
            <div className='p-8 font-inter tracking-[.1rem] bg-blue rounded-4xl'>
                <p className='text-cyan text-reg pb-4'>SHAWON AHMED</p>
                <p className='text-orange text-sml pl-8'>“The winter hoodie I bought is super warm and comfortable. The color looks exactly like the photos. However, the packaging could be better. Overall, very satisfied with the purchase!”</p>
            </div>
            <div className='p-8 font-inter tracking-[.1rem] bg-blue rounded-4xl'>
                <p className='text-cyan text-reg pb-4'>FAHIM HOSSAIN</p>
                <p className='text-orange text-sml pl-8'>“I ordered a pair of denim jeans and a cotton shirt—both exceeded my expectations! The fabric quality feels premium, and the fitting is perfect. Delivery was fast too. Definitely buying again.”</p>
            </div>
        </div>
    );
};

export default CustomerReview;