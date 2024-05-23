import React from 'react';
import reviews from '../../data/reviewsData';
import ReviewsCarousel from '../../components/cards/ReviewsCarousel';

const Reviews = () => {
    return (
        <section className='flex flex-col justify-center pt-6 relative'>

            <span className='text-xxsmall-dark uppercase ml-16 mb-0'>
                [04] Reviews 
            </span>

            <div className="flex flex-col items-center gap-8 relative">
                <h2 className='text-center text-navyBlue text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                    w-2/3 md:w-2/4 lg:w-[80%] pt-2 lg:pt-4' data-aos='fade-up'>
                    What   
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Our Patients
                    </span>   
                    Say About Us
                </h2>

                <p className='text-lg md:text-xl 2xl:text-[1.4rem] text-navyBlue font-[500] mt-1 w-3/4 
                    2xl:w-3/5' data-aos='fade-up'>
                    Radiant Dental Studio always appreciates feedback from our valued patients.
                    To date, we're thrilled to have collected over 100 reviews with an average rating of 5 out of 5 stars.
                    Please read what others are saying about us below, and as always, we would love to
                    <span className='border-b-2 border-azure' style={{ margin: ' 0 .6rem' }}>
                        <a href="#">collect your feedback.</a>
                    </span>
                </p>
            </div>

            {/* Cards Render Dynamically acording to Responsive Size */}
            <div className="flex justify-center items-center space-x-4 mt-6" data-aos='zoom-in-up'>
                <ReviewsCarousel
                reviews={reviews}
                autoSlide={true}
                autoSlideInterval={6000}
                />

            </div>

            {/* <p className='font-cursive text-azure text-[4.5rem] absolute right-48 -bottom-32 transform
                -rotate-12 z-10'>
                Thank You!
            </p> */}
        </section>
    )
}

export default Reviews;
