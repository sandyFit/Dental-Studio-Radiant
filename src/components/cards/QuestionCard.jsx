import React from 'react';
import { renderDescription } from '../../utils/functions';
import { BsDashLg, BsPlusLg } from 'react-icons/bs';
import { HiChevronDoubleDown, HiChevronDoubleUp, HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const QuestionCard = ({ question, answer, isOpen, onToggle }) => {
    

    return (
        <article className={`border-b-2 border-indigo-50 flex flex-col w-10/12 lg:w-[45rem] 2xl:w-[40vw] overflow-hidden
            relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full 
            before:border-2 before:border-indigo-500 before:rounded-md before:bg-indigo-500 before:transition-transform
            before:translate-y-full hover:before:translate-y-0 text-indigo-900 hover:text-indigo-100
            ${isOpen ? 'active' : ''}`}>

            <div className="flex justify-between items-center px-4 py-5 z-[1]" onClick={onToggle}>
                <h4 className="text-current text-xl font-semibold">
                    {question}
                </h4>
                <button className={`item text-current font-[900] ${isOpen ? 'activeIcon rotate-icon' : 'inactiveIcon'}`}>
                    {isOpen ? <HiChevronUp style={{ fontSize: '2rem' }} /> : <HiChevronDown style={{ fontSize: '2rem' }} />}
                </button>
            </div>

            {isOpen && (
                <div className="text-[1rem] content z-[1]">
                    <p className="px-5 pb-12 text-current font-[400]">
                        {renderDescription(answer)}
                    </p>
                </div>
            )}
        </article>
    )
}

export default QuestionCard;

