import React from 'react';


const MotionText = ({part1, part2, part3}) => {
    return (
        <div className="text-slider-container font-anybody text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[8.5rem]"
            style={{ overflow: 'hidden' }}>
            <h2 className='text-center text-navyBlue motion-text font-regular tracking-wider'>
                <div style={{display: 'flex', whiteSpace: 'nowrap'}}>
                    <span className='text-navyBlue' style={{margin: '0 1rem'}}>
                        {part1} 
                    </span>
                    <span className="app-title">{part2}</span>
                    <span className="text-navyBlue" style={{ margin: '0 6rem 0 1rem' }}>{part3}</span>
                    
                    <span className='text-navyBlue' style={{margin: '0 1rem'}}>
                        {part1} 
                    </span>
                    <span className="app-title">{part2}</span>
                    <span className="text-navyBlue" style={{ margin: '0 6rem 0 1rem' }}>{part3}</span>
                    
                </div>
            </h2>
        </div>
    );

};

export default MotionText;