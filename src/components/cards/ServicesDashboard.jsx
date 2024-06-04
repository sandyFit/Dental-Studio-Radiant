import React from 'react';
import servicesCardData from '../../data/servicesCardData';

const ServiceCard = ({ service, index }) => (
    <div className='w-[70vw] h-[35vw] flex  mb-40 sticky top-20 '>

        <div className="flex flex-col gap-6">
            
            <div className="flex justify-center items-center w-full py-3 bg-indigo-300 rounded-2xl">
                <div className='w-full flex justify-between items-center px-6'>
                    <div className="flex items-center gap-3">
                        <div className="flex w-16 h-16 rounded-full bg-indigo-50 justify-center items-center">
                            <img src={service.iconSrc} alt={service.title} className='w-12 h-12' />
                        </div>
                        <h2 className='text-indigo-600 text-5xl font-[900] tracking-wider z-30'>
                            {service.title}
                        </h2>
                    </div>
                    <span className='app-title text-5xl font-[900]'>{`0${index + 1}.`}</span>                                           
                </div>
            </div>

            <div className="flex justify-center items-center gap-6">

                <article  className='relative w-[30%] h-full bg-indigo-300 rounded-[20px]'>
                    <img src={service.imgSrc} alt={service.title}
                        className='w-full h-full object-cover rounded-[20px]' />
                    
                </article>
                <article  className='w-[70%] h-full bg-indigo-600 text-indigo-200 font-[400] rounded-[20px] p-12 '>
                    <div className="flex flex-col gap-6 ">
                        <p className="text-xl mb-3 font-[600]">
                            {service.description}
                        </p>
                        <ul className="grid grid-cols-1 list-disc gap-2" >
                            {(service.categories || []).map((category, catIndex) => (
                                <li key={catIndex} className="">
                                    <div className="flex">
                                        <div className=''>
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

                    {/* <span className="absolute -bottom-28 right-8 font-anybody text-indigo-700 text-[20rem] font-[600]">
                        {`0${index + 1}`}
                    </span> */}
                </article>
            </div>
        </div>

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
