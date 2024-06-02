import React, { useEffect } from 'react';
import '../../assets/css/accordion.css'; // Adjust the path according to your project structure
import servicesCardData from '../../data/servicesCardData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ServicesBigCard = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Check if servicesCardData is defined
        if (!servicesCardData || !Array.isArray(servicesCardData)) {
            console.error("servicesCardData is undefined or not an array");
            return;
        }
        
        const items = document.querySelectorAll('.accordion-bar-item');

        // Apply ScrollTrigger to each item
        items.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top center', // Adjust this value as needed
                onEnter: () => item.classList.add('item-animation'),
                onComplete: () => item.classList.add('open'),
                once: false // Ensure animation happens only once
            });
        });
    }, []);

    // Avoid rendering if servicesCardData is undefined or not an array
    if (!servicesCardData || !Array.isArray(servicesCardData)) {
        return null;
    }

    return (
        <article className="">
            <div className="bar-navigation">
                <ul className="accordion-bar-list" style={{ '--total': servicesCardData.length }}>
                    {servicesCardData.map((service, index) => (
                        <li 
                            key={index}
                            className="accordion-bar-item" 
                            style={{ '--i': index }} 
                            tabIndex={index + 1}
                        >
                            <span className='accordion-bar-item-text'>
                                {service.title}
                            </span>

                            <div className="grid ml-24 my-24 gap-1">
                                <div className="grid grid-cols-1">
                                    <h2 className='text-indigo-900 text-2xl font-bold tracking-wider z-30'>
                                        {service.title}
                                    </h2>
                                    <p className="text-zinc-900 mb-4 z-30">
                                        {service.description}
                                    </p>
                                </div>

                                <ul className="grid grid-cols-1 justify-center list-none gap-1 z-30">
                                    {(service.categories || []).map((category, catIndex) => (
                                        <li key={catIndex} className="">
                                            <ul className="flex gap-4 mt-auto">
                                                <li className='list-disc text-zinc-900'>
                                                    <h4 className="app-title">
                                                        {category.name}
                                                    </h4>
                                                    <p className="text-left text-[.8rem]">
                                                        {category.description}
                                                    </p>
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
