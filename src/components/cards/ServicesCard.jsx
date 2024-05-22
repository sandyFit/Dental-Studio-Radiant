import React from 'react'
import { BsPlusLg } from 'react-icons/bs';

const ServicesCard = ({ iconSrc, title, description, onClick }) => {
    
    return (
        <article className='flex '>
            <div className=" flex items-center hover:bg-[#36476b] w-[28rem] lg:w-[32rem] h-[16rem]
                py-10 px-12 rounded-2xl gradient-border relative ">

                
                <button className="absolute bg-custom-gradient-btn left-[25em] lg:left-[29em] -bottom-[2.2rem] shadow-xl 
                    shadow-slate-800 p-6 rounded-full text-white3"
                    onClick={onClick}
                >
                    <BsPlusLg style={{fontSize: '3rem'}}/>
                </button>
                <div className="w-full">                  
                    <div className='w-32 h-32 rounded-full bg-transparent border-4 border-blue-400
                        flex items-center justify-center'>
                        <img src={iconSrc} alt={`${title} icon`} 
                        className='w-20 h-20' />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h4 className='text-sans text-white text-2xl font-semibold'>
                        {title}
                    </h4>

                    <hr className='border-2 border-blue-400 w-36 my-3' />
                    
                    <p className='text-sans text-white text-[1.2rem] font-thin'>
                        {description}
                    </p>
                </div>

            </div>
        </article>
    )
}

export default ServicesCard;
