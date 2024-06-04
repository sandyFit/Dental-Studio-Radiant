import React, { useEffect, useRef } from 'react';
import { renderDescription } from '../../utils/functions';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ReviewsCard = ({ name, srcImg, review }) => {
    gsap.registerPlugin(ScrollTrigger);

    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        gsap.fromTo(img, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);

    return (
        <section className='flex justify-center items-center w-full relative'>
            <div className="flex justify-center items-center gap-6">
                <article className="grid grid-cols-1 gap-6">
                    <div className='w-[20.8rem] h-[20.8rem] rounded-xl bg-indigo-600  overflow-hidden '>
                        <img
                            ref={imgRef}
                            src={srcImg}
                            alt={`${name} avatar`}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </div>

                    <div className="flex flex-col w-[20.8rem] h-20 bg-indigo-600  rounded-xl justify-center 
                        items-center">
                        <h4 className='text-indigo-200 text-[1.6rem] font-[500]'>
                            {name}
                        </h4>
                    </div>
                </article>

                <article className="grid grid-cols-1 gap-6">
                    <div className="w-[44rem] h-[20.8rem] bg-indigo-600  hover:bg-indigo-700 rounded-2xl 
                    text-indigo-200 px-16 relative">
                        <span className='text-[12rem] absolute bottom-16'>”</span>
                        <p className='text-[1.08rem] font-[400] mt-[8rem] m-0 p-0'>
                            {renderDescription(review)}
                        </p>
                    </div>

                    <div className='flex w-[23.4rem] h-20 bg-indigo-400 justify-center items-center rounded-xl'>
                        <span className='flex text-indigo-500'>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index} style={{ fontSize: '3.6rem' }} />
                            ))}
                        </span>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ReviewsCard;

