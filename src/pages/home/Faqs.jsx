import React, { useState, useEffect, useRef } from 'react'
import QuestionCard from '../../components/cards/QuestionCard';
import questions from '../../data/questions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Faqs = () => {
   
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggleAccordion = index => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    }

    gsap.registerPlugin(ScrollTrigger)

    const highHueRef = useRef(null);

    useEffect(() => {
        const animation = gsap.timeline({
            scrollTrigger: {
            trigger: '.hue-effect',
            start: 'center center', // Animation starts when the top of the element is at the center of the viewport
            toggleActions: 'play none none none', // Play the animation when triggered
            // markers: true
        }
        });

        animation.fromTo(highHueRef.current, 
        { x: '-100%', opacity: 0, color: '#2d3e5e' }, // Starting position and color
        { x: '0%', opacity: 1,  duration: 1, ease: 'power2.out' } // Ending position and animation duration
        );
    }, []);

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
            delay: .6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);


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
        <section className='relative h-auto pt-40  pb-36'>   
            
            <div className="w-full flex justify-end items-center text-med-dark mb-9 relative gap-6">
                <span
                    className="absolute left-[58.2rem] top-1/2 transform -translate-y-1/2 h-[0.1rem] bg-indigo-800"
                    ref={lineRef}
                    style={{ width: '0%' }} // Initial width set to 0%
                ></span>
                <span className="mr-32 relative">05 — Faqs</span>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center relative">

                <div className="w-full relative hue-effect flex justify-center items-center">
                    <h2 className='text-center text-indigo-900 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                        w-2/3 md:w-2/4 lg:w-[80%] pt-2 lg:pt-4' >
                        Got Questions? 
                        <span className='app-title' style={{ margin: ' 0 1rem' }}>
                            We have Answers!
                        </span>   
                        
                    </h2>
                    {/* <h2 ref={highHueRef}
                        className='text-8xl font-[600] text-center mb-3 absolute top-0 left-[26rem] whitespace-nowrap'>
                        Got Questions?
                    </h2> */}
                </div>

                <div className="flex w-full justify-between px-32 pt-16">
                    <div className="flex w-[35vw] h-[35vw] rounded-3xl bg-indigo-600">
                        <img ref={imgRef}
                            src="/people/asian-girl.jpg"
                            alt=""
                            className='w-full h-full object-cover rounded-3xl'
                        />
                    </div>

                    <div className="flex flex-col justify-start items-start ">
                        {questions.map((question, index) => (
                        <QuestionCard
                            key={index}
                            question={question.question}
                            answer={question.answer}
                            isOpen={index === openQuestionIndex}
                            onToggle={() => handleToggleAccordion(index)}
                        />
                        ))}
                    </div>
                </div>
            </div>
          
        </section>
    )
}

export default Faqs;
