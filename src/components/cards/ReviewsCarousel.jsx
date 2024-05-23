import React, { useCallback, useEffect, useState } from 'react'
import ReviewsCard from './ReviewsCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


const ReviewsCarousel = ({ reviews }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 1024) return 1;
        if (width < 1536) return 2;
        return 3;
    }

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
    const handleResize = () => {
        const newVisibleCards = getVisibleCards();
        setVisibleCards(newVisibleCards);

        // Adjust this condition to ensure we're not setting an activeIndex that's out of bounds
        if (activeIndex + newVisibleCards > reviews.length) {
            setActiveIndex(reviews.length - newVisibleCards); // Ensure the last card is visible and not beyond
        }
    }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, reviews.length]); 



    const goNext = useCallback(() => {
    setActiveIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex + visibleCards - 1 >= reviews.length) {
            return 0;
        }
        else {
            return nextIndex;
        }
    });
}, [reviews.length, visibleCards]);



    const goPrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return reviews.length - visibleCards; // Got to the last set of items
            }
            else {
                return Math.max(0, prevIndex - 1);
            }
        })
    }

    //  useEffect(() => {
    //     if (!autoSlide) return;
    //     const slideInterval = setInterval(() => {
    //         goNext();
    //     }, autoSlideInterval);
    //     return () => clearInterval(slideInterval);
    // }, [autoSlide, autoSlideInterval, goNext]);


    const renderCards = () => {
        let cards = [];
        for (let i = 0; i < visibleCards; i++) {
            const reviewIndex = (activeIndex + i) % reviews.length;
            const review = reviews[reviewIndex];
            console.log(`Rendering card for review at index: ${reviewIndex}`, review);
            if (review) {
                cards.push(
                    <ReviewsCard key={reviewIndex} index={reviewIndex} {...review} />
                );
            }
        }
        console.log(cards); // Debug: Check the resulting cards array
        return cards;
    };


    return (
        <div className='flex flex-col items-center justify-center px-16'>
            
            <div className="flex justify-center">
                <button className='text-azure text-5xl' onClick={goPrev}>
                    <HiChevronLeft />
                </button>
                
                <div className='relative overflow-x-hidden w-auto'>
                    <div className='flex justify-center gap-6'>
                        {renderCards()}
                    </div>
                </div>
                <button className='text-azure text-5xl' onClick={goNext}>
                    <HiChevronRight />
                </button>
            </div>
        </div>
    )

}

export default ReviewsCarousel;
