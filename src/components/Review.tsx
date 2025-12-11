import React from 'react';


const Review = ({name, review}: { name: string, review: string}) => {
    return (
        <div>
            <div className='p-4 md:p-8 font-inter bg-blue rounded-2xl'>
                <p className='text-cyan md:text-reg pb-2 md:pb-4 '>{name}</p>
                <p className='text-orange text-exsml md:text-sml leading-4'>{review}</p>
            </div>
        </div>
    );
};

export default Review;