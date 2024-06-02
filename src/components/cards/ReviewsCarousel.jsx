import React, { useCallback, useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const ReviewsCarousel = ({ reviews }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, [reviews.length]);

    const goPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const renderCards = () => {
        const review = reviews[activeIndex];
        if (review) {
            return <ReviewsCard key={activeIndex} {...review} />;
        }
        return null;
    };

    return (
        <div className='flex justify-center items-center w-full relative'>
            <div className="relative flex justify-center items-center w-full">
                <div className="absolute right-[14.2rem] bottom-12 space-x-4 z-20 py-0 flex">
                    <button
                        className='w-36 h-20 bg-indigo-700 hover:bg-indigo-800 rounded-xl
                        text-indigo-100 text-3xl flex justify-center items-center'
                        onClick={goPrev}
                    >
                        ⋘
                    </button>
                    <button
                        className='w-36 h-20 bg-indigo-700 hover:bg-indigo-800 rounded-xl
                        text-indigo-100 text-3xl flex justify-center items-center'
                        onClick={goNext}
                    >
                        ⋙
                    </button>
                </div>
                <div className='relative overflow-hidden w-auto'>
                    <div className='flex justify-center items-center gap-6 my-12'>
                        {renderCards()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
