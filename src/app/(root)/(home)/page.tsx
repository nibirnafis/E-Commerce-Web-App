import CustomerReview from '@/components/CustomerReview';
import HeroSection from '@/components/HeroSection';
import MostPopular from '@/components/MostPopular';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='section-text'>
                <h1>WELCOME TO MEN’S LARGEST</h1>
                <h6>ONLINE WAREDROBE</h6>
            </div>
            <HeroSection></HeroSection>
            <div className='section-text'>
                <h1>MOST POPULAR</h1>
                <h6>SEE OUR MOST POPULAR PRODUCTS</h6>
            </div>
            <MostPopular></MostPopular>
            <div className='section-text'>
                <h1>CUSTOMERS REVIEW</h1>
                <h6>SEE WHAT CUSTOMERS HAVE TO SAY ABOUT OUR PRODUCTS</h6>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default page;