import React from 'react'
import ImagesGrid from '../../components/cards/ImagesGrid'
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import MotionText from '../../components/ui/MotionText';
import BookOnlineBtn from '../../components/ui/BookOnlineBtn';

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book');
    }

    return (
        <section id='index'
            className='flex flex-col w-full min-h-screen '>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 relative mt-12">

                <div className='lg:hidden grid place-self-center w-8/12 p-4 bg-white shadow-lg shadow-slate-900 
                    transform rotate-2 mt-2 md:mt-4'>
                    <div className="image-container">
                        
                        <div className={`curtain bg-zinc-300 opacity-95`}>
                            
                        </div>
                        <img src='/people/black-girl.jpg' alt='beautiful-black-girl-smiling' className="w-full"/>
                    </div>
                    <div className="p-4"></div>
                </div>
                
                <article className='grid space-y-8 md:space-y-12 w-full place-self-center ml-[8rem] md:ml-[16rem] lg:ml-[17.75vw] pb-[5rem]'>
                    <h1 className='text-navyBlue text-4xl md:text-6xl xl:text-7xl font-bold
                            w-2/3 lg:w-3/4 2xl:w-3/5 leading-[1em]'>
                    <span >
                        Reveal
                        <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Your Brightest 
                        </span>
                    </span>
                        Smile
                    </h1>
                    <p className='text-lg md:text-xl xl:text-[1.45rem] text-navyBlue font-[500] mt-8 w-3/4 
                            2xl:w-[70%]'>
                        Let us take care of your teeth. Our dedicated team of professionals is committed to providing you
                        with first-class dental care.
                    </p>
    
                    <div className="flex flex-col md:flex-row gap-10">

                        <div className="flex btn-book-online h-16 px-16">
                            <BookOnlineBtn/>
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
                                            <HiStar key={index} style={{fontSize: '1rem'} } />
                                        ))}
                                    </span>
                                </div>
                                <p className='text-sm font-[500] text-navyBlue'>Verified Reviews</p>
                            </div>
                        </div>

                    </div>
                </article>

                <article className='hidden lg:grid w-[90%] place-self-center pr-24'>
                    <ImagesGrid/>
                </article>
            </div>

            {/* <div className="flex ">
                <MotionText 
                icon={'⁕'}
                part1={'Welcome to'}
                part2={'Radiant'}
                part3={' Dental Studio'}
            />                                          
            </div> */}

            
        </section>
    );
};

export default Hero;
