import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { renderDescription } from '../../utils/functions';

const ReviewsCard = ({name, srcImg, review}) => {
    return (
        <article className='w-[70%] lg:w-[33%] 2xl:w-[25%] gradient-border rounded-3xl p-12 mt-12 relative'>           
            <div className="flex justify-start items-center space-x-4">
                <div >
                    <img src={srcImg}
                        alt={`${name} avatar`}
                        className='border-4 border-spanishBlue rounded-full'
                    />
                </div>

                <div className="flex flex-col">
                    <h4 className='app-title text-3xl font-bold '>
                        {name}
                    </h4>
                    <div className='space-x-2'>
                        <span className='font-bold text-yellow-400'>
                            {[...Array(5)].map((_, index) => (
                                <StarIcon key={index} style={{fontSize: '1.5rem'} } />
                            ))}
                        </span>
                    </div>
                </div>


                
            </div>


            <p className='text-white3 text-xl font-light pt-6'>
                {renderDescription(review)}
            </p>       
        </article>
    )
}

export default ReviewsCard;

