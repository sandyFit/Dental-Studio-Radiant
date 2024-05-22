import React from 'react';


const ImagesGrid = () => {
    const images = [
        '/people/asian-girl.jpg',
        '/people/black-girl.jpg',
        '/people/he.jpg',
        '/people/white-girl.jpg'
    ];

    // Define a base delay for the animation start
    const baseDelay = 1; // seconds
    const delayIncrement = 1; // seconds

    return (
        <div className="grid place-items-center">
            <ul className="grid grid-cols-2 gap-4 p-4">
                {images.map((src, index) => {
                    // Calculate delay for each curtain
                    const animationDelay = `${baseDelay + index * delayIncrement}s`;

                    return (
                        <li key={index} className='list-none p-2 bg-transparent'>
                            <div className={`p-4 bg-white shadow-lg shadow-slate-900 transform 
                                ${index % 2 === 0 ? 'rotate-3' : '-rotate-1'}`}>
                                <div className="image-container">
                                    {/* Apply the calculated delay as an inline style */}
                                    <div
                                        className={`curtain bg-slate-600 opacity-95`}
                                        style={{ animationDelay }}
                                    ></div>
                                    <img src={src} alt={`Image ${index}`} className="w-full"/>
                                </div>
                                <div className="p-4"></div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ImagesGrid;
