import React from 'react';
import { renderDescription } from '../../utils/functions';
import { BsDashLg, BsPlusLg } from 'react-icons/bs';

const QuestionCard = ({ question, answer, isOpen, onToggle }) => {
    

    return (
        <article className={`border-2 border-sky-50 bg-zinc-50 bg-opacity-45 flex flex-col w-10/12 lg:w-[45rem] 
            2xl:w-[70vw] gap-2 rounded-lg 
            ${isOpen ? 'active' : ''}`}>
            <div className="flex justify-between items-center px-12 py-3"
                onClick={onToggle}>
                
                <h4 className="app-title text-xl font-semibold">
                    {question}
                </h4>

                <button className={`item bg-zinc-50 rounded-full p-2 text-zinc-300 font-[900]
                    ${isOpen ? 'activeIcon rotate-icon' : 'inactiveIcon'}`}>
                    {isOpen ? <BsDashLg style={{ fontSize: '2rem' }} /> : <BsPlusLg style={{ fontSize: '2rem' }} />}                   
                </button>
            </div>

            { isOpen && (
                <div className=" text-lg content">
                    <p className='px-12 pb-12 text-indigo-900 font-[400]'>
                        {renderDescription(answer)}
                    </p>
                </div>
            )}
        </article>
    )
}

export default QuestionCard;

