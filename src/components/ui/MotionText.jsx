import React from 'react';


const MotionText = ({icon, part1, part2, part3}) => {
    return (
        <div className="text-slider-container font-anybody text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[10rem] font-[500]"
            style={{ overflow: 'hidden' }}>
            <h2 className='text-center text-navyBlue motion-text font-regular '>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    <span className='text-navyBlue mx-20 rotating-icon'>{icon}</span>
                    <span className='text-navyBlue mr-10'>
                        {part1} 
                    </span>
                    <span className="app-title mr-10">{part2}</span>
                    <span className="text-navyBlue">{part3}</span>
                    <span className='text-navyBlue mx-20 rotating-icon'>{icon}</span>
                    <span className='text-navyBlue mr-10'>
                        {part1} 
                    </span>
                    <span className="app-title mr-10">{part2}</span>
                    <span className="text-navyBlue">{part3}</span>
                    
                </div>
            </h2>
        </div>
    );

};

export default MotionText;