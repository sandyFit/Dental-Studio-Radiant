import React from 'react';
import MotionText from '../../components/ui/MotionText';

const ContactTransition = () => {
    return (
        <section className='w-full h-[5%]'>
            <MotionText
                icon={'∎'}
                part1={'Call us today'}
                part2={'or book online'}
            />
        </section>
    )
}

export default ContactTransition;