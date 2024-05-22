import React from 'react'

const UnderlineText = ({ part1, part2 }) => {
    return (
        <div className="text-center font-anybody" data-aos="fade-up">
            <h2 className='text-white3 text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-regular tracking-wider'>
                <span className='text-white3' style={{margin: '0 1rem'}}>
                    {part1} 
                </span>
                <span className="text-spanishBlue" style={{ margin: '0 1rem' }}>{part2}</span>
            </h2>
        </div>
    );
}

export default UnderlineText;
