import React, { useEffect, useState, useRef } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import MenuCurtain from '../../components/cards/MenuCurtain';
import { HiArrowUp } from 'react-icons/hi2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const About = () => {

    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const lenisRef = useRef(null);

    useEffect(() => {
        //LENIS SMOOTH SCROLL
        const lenis = new Lenis({
            duration: 2
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        // Integration lenis on GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the scroll threshold based on your layout
        const scrollThreshold = 780;

        if (scrollPosition > scrollThreshold) {
            setShowFloatingBtn(true);
        }
        else {
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

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        gsap.fromTo(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 3,
            delay: .5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);
    
    gsap.registerPlugin(ScrollTrigger);

    const lineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { width: '0%' },
            {
                width: '20%', // Change this value to your desired width
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    
    
    return (
        <Element id='about'
            className='flex flex-col pt-[3rem] rounded-t-[50px] w-full mb-[10vw]' >

           <div className="w-full flex justify-end items-center text-med-dark mb-9 relative gap-6">
                <span
                    className="absolute left-[58rem] top-1/2 transform -translate-y-1/2 h-[0.1rem] bg-indigo-800"
                    ref={lineRef}
                    style={{ width: '0%' }} // Initial width set to 0%
                ></span>
                <span className="mr-32 relative">01 — About</span>
            </div>

            <div className="relative">
                {/* FLOATING MENU BUTTON  */}
                <button onClick={toggleMenu}
                        className={`fixed w-20 h-20 top-8 left-10 group inline-flex items-center 
                            justify-center overflow-hidden rounded-full bg-indigo-50 bg-opacity-95 border-[3px] border-[#fff] 
                            z-[1000] ${showFloatingBtn ? '' : 'invisible'} `}>
                        <div className="group relative flex items-center gap-2">

                            <div className="flex flex-col items-end cursor-pointer gap-[7px]">
                                <div className={`lines sup-line ${isMenuOpen ? 'active' : ''}`}></div>
                                <div className={`lines medium-line ${isMenuOpen ? 'active' : ''}`}></div>
                                <div className={`lines inf-line ${isMenuOpen ? 'active' : ''}`}></div>
                            </div>
                        </div>
                    </button>
               
                    {/* MENUHERO COMPONENT */}
                    <div className={`z-30 fixed top-4 left-6 ${showFloatingBtn ? '' : 'invisible'}`}>                       
                        {isMenuOpen && (
                            <MenuCurtain isMenuOpen={isMenuOpen}/>                       
                        )}
                    </div>
                        

                    {/* FLOATING BUTTON TO GO TOP */}
                    <button onClick={scrollToTop}
                        className={`fixed p-5 right-10 bottom-20 group inline-flex  items-center 
                            justify-center overflow-hidden rounded-full bg-indigo-50 bg-opacity-95 border-[3px] border-[#fff] 
                            z-[1000] ${showFloatingBtn ? '' : 'invisible'}`}>
                        <div className="transition duration-300 group-hover:rotate-[360deg] text-indigo-900">
                            <HiArrowUp style={{fontSize: '2.2rem'}}/>
                        </div>
                    </button>
            </div>

            <div className="w-full flex flex-col xl:flex-row justify-between items-center py-[3rem] px-32 relative">                             
                <article className="w-[35vw] rounded-[20px] bg-indigo-600 overflow-hidden">
                {/* ABOUT IMAGE */}                                   
                    <img  ref={imgRef}                     
                        src="/images/dental-studio.jpg"
                        alt="Dental Studio"
                        className='w-full h-full object-cover rounded-[20px]'
                        />
                </article>

                
                <article className='w-1/2 flex flex-col justify-center items-center relative'>                   
                    {/* ABOUT COPY */}
                    <div className="w-full flex flex-col">
                        <h2 className='text-left text-indigo-900  text-3xl md:text-4xl xl:text-5xl font-bold
                            w-full'>
                            Expert 
                            <span className='app-title ' style={{ margin: ' 0 1rem' }}>
                                Care,<br/>
                            </span>         
                            <span className='text-indigo-900 mr-4'>
                                Exceptional 
                            </span>         
                            <span className='app-title' >
                                Results
                            </span>         
                        </h2>

                        <p className='text-lg md:text-xl text-indigo-900 font-[500] mt-8 w-full '>
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
                    </div>

                </article>
            </div>
        </Element>
    )
}

export default About;
