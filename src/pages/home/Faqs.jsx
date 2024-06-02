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

    return (
        <section className='relative h-auto pt-40'>   

             <div className="flex justify-between text-med-dark mx-32 mb-6">
                <span className='flex '>
                   ( 05
                </span>
                <span className='flex '>
                    Faqs )
                </span>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center relative">

                <div className="w-full relative hue-effect">
                    <h2 className='text-indigo-900 text-8xl font-[600] text-center mb-3 absolute top-0 left-[26rem]  '>
                        Got Questions?
                    </h2>
                    {/* <h2 ref={highHueRef}
                        className='text-8xl font-[600] text-center mb-3 absolute top-0 left-[26rem] whitespace-nowrap'>
                        Got Questions?
                    </h2> */}
                </div>
                <div>
                    <h2 className='text-center app-title text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                        pt-28 pb-10'data-aos='fade-up'>
                        We Have Answers                                          
                    </h2>     
                </div> 

                <div className="flex flex-col justify-center items-center space-y-6 pb-60"
                    
                >
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

            
        </section>
    )
}

export default Faqs;
