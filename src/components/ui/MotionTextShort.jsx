import React, { useEffect, useState } from 'react';

const MotionTextShort = ({ part1, part2, part3 }) => {
    // State to hold the duplicated content
    const [duplicatedContent, setDuplicatedContent] = useState([]);

    useEffect(() => {
        // Function to calculate how many times to duplicate the content
        const calculateRepetitions = () => {
            const screenWidth = window.innerWidth;
            const textWidth = part1.length + part2.length + part3.length; // Simplistic; consider pixel width for accuracy
            const repetitions = Math.ceil(screenWidth / (textWidth * 10)); // Adjust the multiplier based on font size, etc.

            return Math.max(2, repetitions); // Ensure a minimum number of repetitions for smaller texts
        };

        // Generate the duplicated content
        const repetitions = calculateRepetitions();
        const contentArray = new Array(repetitions).fill(0).map((_, index) => (
            <React.Fragment key={index}>
                <span className='text-white3' style={{margin: '0 1rem'}}>
                    {part1}
                </span>
                <span className="text-spanishBlue">{part2}</span>
                <span className="text-white" style={{ margin: '0 6rem 0 1rem' }}>{part3}</span>
            </React.Fragment>
        ));

        setDuplicatedContent(contentArray);
    }, [part1, part2, part3]); // Recalculate when parts change

    return (
        <div className="text-slider-container font-anybody z-10" style={{overflow: 'hidden'}}>
            <h2 className='text-center text-white3 motion-text font-regular tracking-wider'>
                <div style={{display: 'flex', whiteSpace: 'nowrap'}}>
                    {duplicatedContent}
                </div>
            </h2>
        </div>
    );
};

export default MotionTextShort;
