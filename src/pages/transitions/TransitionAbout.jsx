import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TransitionAbout = () => {
  const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none none',

                scrub: true
            }
        });

        // Ensure elements start hidden and then fade in
        gsap.set([textRef.current, imageRef.current], { opacity: 0 });
        tl.fromTo(sectionRef.current, { scale: 0.5 }, { scale: 1, duration: 1.5, ease: 'power3.out' });
        tl.to([textRef.current, imageRef.current], { opacity: 1, duration: 1.5, ease: 'power3.out' }, "<");

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <section id='t3'>          
            <div ref={sectionRef} className='w-full min-h-screen flex justify-center items-center  relative'>
                <div className="w-[90%] h-[40rem] rounded flex flex-col justify-center items-center pb-24 
                    transition-transform">
                    <div ref={textRef}
                        className='flex bigger-text'>                    
                        <h1 className='flex big-title text-center '>
                            Welcome to Radiant Dental Studio
                        </h1>
                        
                    </div>
                </div>
            </div>
                        
        </section>
    );
}

export default TransitionAbout