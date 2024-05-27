import React, { useState } from 'react'
import QuestionCard from '../../components/cards/QuestionCard';
import questions from '../../data/questions';

const Faqs = () => {
   
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggleAccordion = index => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    }


    return (
        <section className='relative h-auto pt-40'>   

            <span className='flex justify-end text-xxsmall-dark uppercase mr-16 '>
                [05] Faqs 
            </span>
            
            <div className="flex flex-col justify-center items-center">

                <h2 className='text-navyBlue text-8xl font-[600] text-center mb-3'>
                    Got Questions?
                </h2>
                <div>
                    <h2 className='text-center app-title text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                        pt-6 pb-10'data-aos='fade-up'>
                        We Have Answers                                          
                    </h2>     
                </div> 

                <div className="flex flex-col justify-center items-center space-y-6 pb-32"
                    data-aos='zoom-in-up'
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
