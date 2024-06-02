import React from 'react';
import servicesCardData from '../../data/servicesCardData';

const ServiceCard = ({ service, index }) => (
    <div className='w-[70vw] h-[35vw] flex gap-6 mb-40 sticky top-20'>
        <article  className='relative w-[30%] h-full bg-indigo-300 rounded-[20px]'>
            <img src={service.imgSrc} alt={service.title}
                className='w-full h-full object-cover rounded-[20px]' />
            
        </article>

        <article  className='w-[70%] h-full bg-indigo-700 rounded-[20px] p-12'>
            <div className="grid gap-6">
                <div>
                    <h2 className='text-indigo-200 text-2xl font-bold tracking-wider z-30'>
                        {service.title}
                    </h2>
                    <p className="text-zinc-200 mb-4 z-30">
                        {service.description}
                    </p>
                </div>
                <ul className="grid grid-cols-1 list-disc text-indigo-200 gap-2 z-30">
                    {(service.categories || []).map((category, catIndex) => (
                        <li key={catIndex} className="">
                            <div className="flex">
                                <div className='list-disc '>
                                    <h4 className="text-lg font-[600]">
                                        {category.name}
                                    </h4>
                                    <p className="text-left text-[.9rem]">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    </div>
);

const ServicesDashboard = () => {
    if (!servicesCardData || !Array.isArray(servicesCardData)) {
        console.error("servicesCardData is undefined or not an array");
        return null;
    }

    return (
        <div className='flex flex-col items-center relative'>
            {servicesCardData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    );
};

export default ServicesDashboard;
