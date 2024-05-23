import React, { useState } from 'react'
import servicesCardData from '../../data/servicesCardData';
import services from '../../data/services'
import ServicesCard from '../../components/cards/ServicesCard';
import ModalServices from '../../components/cards/ModalServices';

const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {

        console.log('Opening modal with service:', service); 
        
        if (service) {
            // find the full service data, including categories
            const fullServiceData = services.find(s => s.title === service.title);
            if (fullServiceData) {
                setSelectedService(fullServiceData);
            }
            else {
                setSelectedService(service);
            }
            setIsModalOpen(true);
        }
    }
        
    return (
        <section className='w-full flex justify-center pb-2 xl:pb-40 pt-1 xl:pt-20 bg-navyBlue rounded-b-[30px]'>
            <span className='text-xxsmall-white ml-12 absolute left-2'>
                [02] Services 
            </span>
            <div className="flex flex-col items-center gap-8 relative">
                <h2 className='text-center text-white3 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                    w-2/3 md:w-2/4 lg:w-3/5 pt-2 tracking-wider' data-aos="fade-up">                   
                        Service and Safety is Our  
                    <span className='app-title ml-4' >
                        Top Priority
                    </span>         
                </h2>

                <p className='text-lg md:text-xl 2xl:text-[1.4rem text-white3 font-light mt-2 w-3/4 
                    2xl:w-[70%]'
                    data-aos="fade-up"
                >
                    Our comprehensive dental services
                    provide the treatments you need to look and feel your best!
                    We’re dedicated to ensuring all our patients receive dental care that never compromises on quality.
                    <br/>
                    Trust us for a wide range of treatments aimed at
                    enhancing both the aesthetics and longevity of your smile.
                </p>
                  
                <article className="flex flex-wrap gap-20 w-full md:w-4/5 lg:w-4/5 mt-4 justify-center"
                    data-aos='zoom-in-up'>
                    {servicesCardData.map((service, index) => (
                        <div key={index} className=''>                    
                            <ServicesCard
                                iconSrc={service.iconSrc}
                                title={service.title}
                                description={service.description}
                                onClick={() => openModal(service)}
                            />
                        </div>
                    ))}
                </article>

                <article className='absolute'>
                    {isModalOpen && selectedService && (
                        <ModalServices
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            service={selectedService}
                        />
                    )}
                </article>

            </div>             

        </section>
    )
}

export default Services;

