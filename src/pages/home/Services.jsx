import React, { useState } from 'react'
import servicesCardData from '../../data/servicesCardData';
import services from '../../data/services'
import ServicesCard from '../../components/cards/ServicesCard';
import ModalServices from '../../components/cards/ModalServices';
import ServicesBigCard from '../../components/cards/ServicesBigCard';
import ServicesDashboard from '../../components/cards/ServicesDashboard';


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
        <section className='w-full rounded-b-[30px]'>
             <div className="flex justify-between text-med-dark mx-32 mb-6">
                <span className='flex '>
                   ( 02
                </span>
                <span className='flex '>
                    Services )
                </span>
            </div>
            <div className="flex  justify-center">

                <div className="flex flex-col items-center gap-8 relative">
                    <h2 className='text-center text-indigo-900 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                        w-2/3 md:w-2/4 lg:w-3/5 pt-2 tracking-wider' data-aos="fade-up">                   
                            Service and Safety Are Our  
                        <span className='text-indigo-200 ml-4' >
                            Top Priority
                        </span>         
                    </h2>

                    <p className='text-lg md:text-xl 2xl:text-[1.4rem] text-indigo-900 font-[600] mt-2 w-3/4 
                        2xl:w-[70%] z-20'
                        data-aos="fade-up"
                    >
                        Experience top-quality dental care that enhances the beauty and longevity of your smile.
                        Our expert team prioritizes both aesthetics and well-being, ensuring comprehensive services
                        that make you look and feel your best.
                    </p>
                    
                    <div className="flex mt-6" >
                        <ServicesDashboard/>
                    </div>

                    {/* <article className="flex flex-wrap gap-20 w-full md:w-4/5 lg:w-4/5 mt-4 justify-center"
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
                    </article> */}

                </div>             
            </div>

        </section>
    )
}

export default Services;

