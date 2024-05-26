import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';

const ServicesCard = ({ iconSrc, title, description, onClick }) => {
    
    return (
        <article className='flex '>
            <div className=" flex items-center bg-violet-100 bg-opacity-50 w-[28rem] hover:bg-opacity-45 lg:w-[32rem] 
                h-[16rem] shadow-lg shadow-violet-400 py-10 px-12 rounded-2xl relative ">
                
                <button className="absolute top-52 right-4 text-navyBlue"
                    onClick={onClick}
                >
                    <BsPlusLg style={{fontSize: '2rem'}}/>
                </button>
                <div className="w-full">                  
                    <div className='w-32 h-32 rounded-full bg-transparent border-4 border-blue-500
                        flex items-center justify-center'>
                        <img src={iconSrc} alt={`${title} icon`} 
                        className='w-20 h-20' />
                    </div>
                </div>

                <div className="flex flex-col ">
                    <h4 className='text-sans text-zinc-navyBlue text-2xl font-semibold'>
                        {title}
                    </h4>

                    <hr className='border-2 border-blue-500 w-36 my-3' />
                    
                    <p className='text-sans text-zinc-950 text-[1.2rem] font-[400]'>
                        {description}
                    </p>
                </div>

            </div>
        </article>
    )
}

export default ServicesCard;
