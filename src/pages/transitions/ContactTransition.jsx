import React, { useState, useEffect, useRef } from 'react'
import MotionText from '../../components/ui/MotionText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ContactTransition = () => {

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
        <section className='w-full '>

            <div className="w-full flex justify-end items-center text-med-dark mb-9 relative gap-6">
                 <span
                    className="absolute left-[47.8rem] top-4 transform -translate-y-1/2 h-[0.1rem] bg-indigo-800"
                    ref={lineRef}
                    style={{ width: '0%' }} // Initial width set to 0%
                ></span>
                <span className="mr-32 mb-16 relative">
                    Didn't find your answer? 
                </span>
            </div>

            <MotionText
                icon={'∎'}
                part1={"Feel Free to"}
                part2={'Reach Out'}
            />

            
        </section>
    )
}

export default ContactTransition;