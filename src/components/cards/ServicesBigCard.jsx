import React from 'react';
import '../../assets/css/accordion.css'; // Adjust the path according to your project structure
import servicesCardData from '../../data/servicesCardData';
import { renderDescription } from '../../utils/functions';

const ServicesBigCard = () => {
    // Check if servicesCardData is defined
    if (!servicesCardData || !Array.isArray(servicesCardData)) {
        console.error("servicesCardData is undefined or not an array");
        return null;
    }

    return (
        <article className="">
            <div className="bar-navigation ">
                <ul className="accordion-bar-list" style={{ '--total': servicesCardData.length }}>
                    {servicesCardData.map((service, index) => (
                        <li 
                            key={index}
                            className="accordion-bar-item" 
                            style={{ '--i': index }} 
                            tabIndex={index + 1}
                        >
                            <span className='accordion-bar-item-text mb-6'>
                                {service.title}
                            </span>

                            <div className="grid ml-16 mb-60">
                                <div className="grid grid-cols-1 ">
                                    <h2 className='text-navyBlue text-xl font-bold tracking-wider z-30'>                   
                                        {service.title}        
                                    </h2>
                                    <p className="text-sm text-zinc-900 mb-4 z-30">
                                        {service.description}
                                    </p>
                                </div>

                                <ul className="grid grid-cols-1 justify-center list-none gap-1 z-30">
                                    {(service.categories || []).map((category, catIndex) => (
                                        <li key={catIndex} className="">
                                            <ul className="flex justify-end items-start gap-4 mt-auto">
                                                <li className='list-disc text-zinc-900'>
                                                    {category.name}
                                                </li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ServicesBigCard;
