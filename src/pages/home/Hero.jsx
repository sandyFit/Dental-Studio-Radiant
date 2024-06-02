import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import Button from '../../components/cards/Button';

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book');
    }

    const imgRef = useRef(null);

    useLayoutEffect(() => {
        const img = imgRef.current;

        // Initially hide the image and apply the clip path
        gsap.set(img, { opacity: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });

        // Animate the image to fade in and reveal with clip path
        gsap.to(img, {
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "power2.out",
        });

    }, []);
    
    return (
        <section id='index' className='flex flex-col w-full min-h-screen mb-[10vw] '>

            <div className="w-full flex justify-center items-center relative mt-40 px-28 z-[0]">
                
                <article className='w-1/2 flex flex-col'>
                    <h1 className='text-indigo-900 text-4xl md:text-6xl xl:text-7xl font-bold w-full leading-[1em]'>
                        <span>Reveal
                            <span className='app-title' style={{ margin: '0 1rem' }}>
                                Your Brightest
                            </span>
                        </span>
                        Smile
                    </h1>
                    <p className='text-lg md:text-xl  text-indigo-900 font-[500] mt-8 w-3/4 2xl:w-[86%]'>
                        Let us take care of your teeth. Our dedicated team of professionals is committed to providing you
                        with first-class dental care.
                    </p>
    
                    <div className="flex flex-col md:flex-row gap-10 mt-12 mb-12">

                        <div className="flex btn-book-online h-16 px-16 text-[1.4rem]">
                            <Button text={'book online'} />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <img src="/icons/google.png" alt="Google logo" className='w-16'/>
                            </div>

                            <div className="flex flex-col justify-center text-azure h-16">             
                                <p className='text-xl font-semibold'>100 +</p>
                                <div className='space-x-2'>
                                    <span className='flex font-bold'>
                                        {[...Array(5)].map((_, index) => (
                                            <HiStar key={index} style={{ fontSize: '1rem' }} />
                                        ))}
                                    </span>
                                </div>
                                <p className='text-sm font-[500] text-indigo-900'>Verified Reviews</p>
                            </div>
                        </div>

                    </div>
                </article>

                <article className='w-[40vw]  h-[40rem] flex'>
                    <div className="flex w-full h-full">
                        <img  ref={imgRef}
                            src="/people/black-girl1.jpg"
                            alt="Beautiful smile afroamerican girl"
                            className='w-full h-full object-cover rounded-[20px] hero-image' />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Hero;
