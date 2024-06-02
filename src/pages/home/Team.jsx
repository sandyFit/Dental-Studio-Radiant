import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import bioData from '../../data/bioData';
import { renderDescription } from '../../utils/functions';

const Team = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        //LENIS SMOOTH SCROLL
        const lenis = new Lenis({
            duration: 1.2
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const workItems = document.querySelectorAll('.work__photo-item');

        workItems.forEach((item, index) => {
            item.style.zIndex = workItems.length - index;
        });

        gsap.set('.work__photo-item', {
            clipPath: 'inset(0% 0% 0% 0%)'
        });

        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: '.work',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        animation.to('.work__photo-item:not(:last-child)', {
            clipPath: 'inset(0% 0% 100% 0%)',
            stagger: 0.5,
            ease: 'none'
        });
    }, []);

    return (
        <section className="w-full h-auto flex flex-col justify-center pt-1 xl:pt-44 pb-2 xl:pb-12 z-10 relative">
             <div className="flex justify-between text-med-dark mx-32 mb-6">
                <span className='flex '>
                   ( 03
                </span>
                <span className='flex '>
                    Staff )
                </span>
            </div>

            <h2 className='big-title text-center' data-aos="fade-up">
                Meet Our 
                <span className='app-title ml-8'>Team</span>
            </h2>
            <div className="work flex">
                <div className="relative w-[56%] z-10">
                    <div className="m-auto w-[84%]">
                        {bioData.map((member, index) => (
                            <div key={index} className={`bio-${index} w-full h-[100vh] flex flex-col justify-center`}>
                                <div className="ml-16 relative w-full z-20">
                                    <h3 className="text-left text-indigo-900 text-2xl md:text-4xl xl:text-5xl font-bold w-2/3 md:w-2/4 lg:w-[80%] pt-2 tracking-wider" data-aos="fade-up">
                                        {member.firstName}
                                        <span className="app-title ml-4">{member.lastName}</span>
                                    </h3>
                                    <p className="text-lg md:text-xl 2xl:text-xl text-indigo-900 mt-8 w-3/4 font-[500] 2xl:w-[80%]" data-aos="fade-up">
                                        {renderDescription(member.description)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[40%] h-auto">
                    <div className="flex flex-col justify-center sticky w-full h-screen top-0">
                        <div className="w-[35vw] h-[35vw] relative">
                            {bioData.map((member, index) => (
                                <div key={index} className={`work__photo-item work__photo-item-${index}`}>
                                    <img src={member.imageSrc} alt={member.altText} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
