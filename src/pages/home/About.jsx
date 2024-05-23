import React, { useEffect, useState } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import MenuCurtain from '../../components/cards/MenuCurtain';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiArrowUp } from 'react-icons/hi2';

const About = () => {

    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the scroll threshold based on your layout
        const scrollThreshold = 1140;

        if (scrollPosition > scrollThreshold) {
        setShowFloatingBtn(true);
        } else {
        setShowFloatingBtn(false);
        }
    };


    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <Element id='about'
            className='flex flex-col py-[3rem] bg-navyBlue rounded-t-[30px] pt-20' >

            <span className='text-xxsmall-white ml-12'>
                [01] About Us 
            </span>

            <div className="w-full relative py-[3rem] flex flex-col xl:flex-row justify-center items-center 
                gap-16 md:gap-24">
                
                <img src="/images/dots.png" alt="dots" className='hidden 2xl:block absolute w-72 left-16 -bottom-12 opacity-25' />
                <img src="/images/dots.png" alt="dots" className='hidden 2xl:block absolute w-72 left-[28rem] -top-12 rotate-90 opacity-25' />

                <div className="w-full ml-12">

                    <article className='w-[30vw] bg-white shadow-xl shadow-slate-900 transform 
                        -rotate-3 px-8 pt-6 pb-24 ml-[1rem] lg:ml-36 2xl:ml-[10rem]'>                   
                        <img src="/images/dental-studio.jpg" alt="Dental Studio" className=''/>
                    </article>
                </div>

                <article className='flex flex-col justify-center items-center relative'>

                    <button onClick={toggleMenu}
                        className={`fixed p-5 top-8 right-[110rem] group inline-flex items-center 
                            justify-center overflow-hidden rounded-full bg-white3 bg-opacity-30 
                            z-50 ${showFloatingBtn ? '' : 'invisible'} `}>
                        <div className={`transition duration-300 text-spaceCadet ${isMenuOpen ? 'rotate-icon' : ''}`}>
                            {isMenuOpen ? <AiOutlineClose  style={{fontSize: '3rem'}} /> : <AiOutlineMenu style={{fontSize: '3rem'}} />}
                        </div>
                    </button>

                
                    <div className={`z-30 ${showFloatingBtn ? '' : 'invisible'}`}>                       
                        {isMenuOpen && (
                            <MenuCurtain isMenuOpen={isMenuOpen}
                                
                            />
                        
                        )}
                    </div>
                        

                    <button onClick={scrollToTop}
                        className={`fixed p-5 left-96 2xl:left-[110rem] 2xl:top-[48rem] group inline-flex  items-center 
                            justify-center overflow-hidden rounded-full bg-navyBlue bg-opacity-30 z-50
                            ${showFloatingBtn ? '' : 'invisible'}`}>
                        <div className="transition duration-300 group-hover:rotate-[360deg] text-spaceCadet">
                            <HiArrowUp style={{fontSize: '3rem'}}/>
                        </div>
                    </button>

                    <h2 className='text-left text-zinc-50  text-3xl md:text-4xl xl:text-5xl font-bold
                        w-[80%]'>
                        Expert 
                        <span className='app-title ' style={{ margin: ' 0 1rem' }}>
                            Care,<br/>
                        </span>         
                        <span className='text-zinc-50 mr-4'>
                            Exceptional 
                        </span>         
                        <span className='app-title' >
                            Results
                        </span>         
                    </h2>

                    <p className='text-lg md:text-xl 2xl:text-[1.45rem] text-zinc-50 font-[100] mt-8 w-[80%] pr-12'>
                        We are a passionate team of dental clinicians committed to providing care for patients of all ages —
                        from the young to the young at heart.
                        <br/><br/>
                        Since 2002, we have been blending advanced technology with a welcoming and friendly atmosphere to
                        offer outstanding dental services in Northern New Jersey.                       
                        <br/><br/>
                        With cutting-edge equipment, we deliver exceptional dental care, ensuring your interests come first
                        for a healthier, brighter smile.
                        <br/><br/>
                        Our state-of-the-art facility in Jersey City offers a welcoming environment.
                        Trust us for comprehensive dental care with a commitment to excellence.
                    </p>
                </article>
            </div>
        </Element>
    )
}

export default About;
