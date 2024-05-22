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
                    w-2/3 md:w-2/4 lg:w-3/5 pt-2 lg:pt-4' data-aos="fade-up">
                    Discover Our Exceptional  
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Dental Services
                    </span>         
                </h2>

                <p className='text-lg md:text-xl 2xl:text-2xl text-white3 font-light mt-8 w-3/4 
                    2xl:w-3/5'
                    data-aos="fade-up"
                >
                    We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
                    assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
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

