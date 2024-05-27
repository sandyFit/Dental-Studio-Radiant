import React from 'react';
import { renderDescription } from '../../utils/functions';
import { HiStar } from 'react-icons/hi';

const ReviewsCard = ({name, srcImg, review}) => {
    return (
        <article className='w-[70%] lg:w-[33%] 2xl:w-[30%] bg-zinc-50 bg-opacity-45 border-[3px] border-zinc-50
            rounded-3xl p-12 mt-12 relative'>           
            <div className="flex justify-start items-center space-x-4">
                <div >
                    <img src={srcImg}
                        alt={`${name} avatar`}
                        className='border-4 border-violet-400 rounded-full'
                    />
                </div>

                <div className="flex flex-col">
                    <h4 className='app-title text-[1.5rem] font-bold '>
                        {name}
                    </h4>
                    <div className='flex space-x-2'>
                        <span className='flex font-bold text-azure'>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index} style={{fontSize: '1rem'} } />
                            ))}
                        </span>
                    </div>
                </div>


                
            </div>


            <p className='text-zinc-950 font-[400] pt-6'>
                {renderDescription(review)}
            </p>       
        </article>
    )
}

export default ReviewsCard;

