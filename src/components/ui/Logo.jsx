import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='flex space-x-2'>
             <Link to="/" className="flex flex-row items-center space-x-2">
                {/* <img src="./logo.png" alt="Radiant's logo" className='h-16' /> */}
                <div className='flex flex-col'>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bai uppercase font-bold text-indigo-900 
                        tracking-[.5em]">
                        Radiant
                    </span>
                    {/* <hr className='border-1 border-azure w-[95%]' /> */}
                    <div className="flex justify-center items-center gap-2">
                        <hr className='border-[1.5px] border-indigo-900 w-[37%] md:w-[40%]'/>
                        <span className='text-[0.65rem] md:text-[0.8rem] lg:text-base text-right pr-4 font-[600]
                        uppercase tracking-widest text-indigo-800'>Dental Studio</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Logo