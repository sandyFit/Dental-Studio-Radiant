import React from 'react'
import ImagesGrid from '../../components/cards/ImagesGrid'
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import MotionText from '../../components/ui/MotionText';

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

                        <button class="group relative h-16 overflow-hidden rounded-[8px] btn-filled text-[1.4rem] 
                        font-[600] uppercase px-16">
                            <span class="relative inline-flex">
                                <span class="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateX(360deg)]">
                                    B
                                </span>
                                <span class="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateX(360deg)]">
                                    o
                                </span>
                                <span class="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateX(360deg)]">
                                    o
                                </span>
                                <span class="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateX(360deg)]">
                                    k
                                </span>
                                <span class="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateX(360deg)]">
                                    &nbsp;
                                </span>
                                <span class="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateX(360deg)]">
                                    O
                                </span>
                                <span class="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateX(360deg)]">
                                    n
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
                                    l
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
                                    i
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
                                    n
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
                                    e
                                </span>
                            </span>
                        </button>


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
