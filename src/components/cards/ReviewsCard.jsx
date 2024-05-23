import React from 'react';
import { renderDescription } from '../../utils/functions';
import { HiStar } from 'react-icons/hi';

const ReviewsCard = ({name, srcImg, review}) => {
    return (
        <article className='w-[70%] lg:w-[33%] 2xl:w-[30%] bg-navyBlue rounded-3xl p-12 mt-12 relative'>           
            <div className="flex justify-start items-center space-x-4">
                <div >
                    <img src={srcImg}
                        alt={`${name} avatar`}
                        className='border-4 border-spanishBlue rounded-full'
                    />
                </div>

                <div className="flex flex-col">
                    <h4 className='app-title text-xl font-bold '>
                        {name}
                    </h4>
                    <div className='flex space-x-2'>
                        <span className='flex font-bold text-yellow-400'>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index} style={{fontSize: '.8rem'} } />
                            ))}
                        </span>
                    </div>
                </div>


                
            </div>


            <p className='text-zinc-50 font-[100] pt-6'>
                {renderDescription(review)}
            </p>       
        </article>
    )
}

export default ReviewsCard;

