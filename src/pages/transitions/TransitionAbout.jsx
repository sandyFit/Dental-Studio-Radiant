import React from 'react';
import MotionText from '../../components/ui/MotionText';


const TransitionAbout = () => {

    return (
        <section id='t1'
            className='flex flex-col pt-[5rem] pb-[8rem] -z-10' >
            <MotionText 
                icon={'⁕'}
                part1={'Welcome to'}
                part2={'Radiant'}
                part3={' Dental Studio'}
            />
            
                        
        </section>
    );
}

export default TransitionAbout