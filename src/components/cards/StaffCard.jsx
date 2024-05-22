import { ArrowForward, ArrowRight } from '@mui/icons-material';
import React from 'react'

const StaffCard = ({id, imgSrc, name, title, className, onClick}) => { // Notice the added className prop here
  return (
    // Apply the className prop to the article element
    <article className={`grid place-items-center w-1/3 md:w-56 lg:w-60 2xl:w-72 ${className}`} onClick={onClick}> 
        <div className="grid grid-cols-1 gap-4 p-4">
            <div className='p-4 bg-white shadow-lg shadow-slate-900'>
                <div className="image-container">                       
                    <img src={imgSrc} alt={`Image ${id}`} className="w-full"/>
                </div>
              <div className="p-2 flex flex-col items-center relative">
                    <p className='text-sm md:text-base lg:text-xl font-medium'>{name}</p>
                          
                      <p className='text-sm lg:text-base'>{title}</p>
                      
                      <button className='absolute -right-2 top-10'>
                          <ArrowForward style={{ fontSize: '1.6rem', color: '#0084FF' }} />
                      </button>
              </div>
            </div>
        </div>
    </article>
  )
}
export default StaffCard;
