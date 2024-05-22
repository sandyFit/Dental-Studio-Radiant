import React from 'react';
import { HiStar } from 'react-icons/hi';

const Stars = () => {
    return (
        <div className='space-x-2'>
            <span className='font-bold'>
                {[...Array(5)].map((_, index) => (
                    <HiStar key={index} />
                ))}
            </span>
        </div>
    )
}

export default Stars;