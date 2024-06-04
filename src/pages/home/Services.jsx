import React, { useRef, useState, useEffect } from 'react';
import services from '../../data/services';
import ServicesDashboard from '../../components/cards/ServicesDashboard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        console.log('Opening modal with service:', service);

        if (service) {
            const fullServiceData = services.find(s => s.title === service.title);
            if (fullServiceData) {
                setSelectedService(fullServiceData);
            } else {
                setSelectedService(service);
            }
            setIsModalOpen(true);
        }
    };

    gsap.registerPlugin(ScrollTrigger);

    const lineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { width: '0%' },
            {
                width: '20%', // Change this value to your desired width
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className='w-full rounded-b-[30px]'>
            <div className="w-full flex justify-end items-center text-med-dark mb-9 relative gap-6">
                <span
                    className="absolute left-[56rem] top-1/2 transform -translate-y-1/2 h-[0.1rem] bg-indigo-800"
                    ref={lineRef}
                    style={{ width: '0%' }} // Initial width set to 0%
                ></span>
                <span className="mr-32 relative">02 — Services</span>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col items-center gap-8 relative">
                    <h2
                        className='text-center text-indigo-900 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                        w-2/3 md:w-2/4 lg:w-3/5 pt-2 tracking-wider'
                        data-aos="fade-up"
                    >
                        Expert
                        <span className='text-indigo-200 mx-4'>Dental Care</span>
                        for Beauty and Well-being
                    </h2>

                    <p
                        className='text-lg md:text-xl 2xl:text-[1.4rem] text-indigo-900 font-[600] mt-2 w-3/4 
                        2xl:w-[70%] z-20'
                        data-aos="fade-up"
                    >
                        Experience top-quality dental care that enhances the beauty and longevity of your smile.
                        Our expert team prioritizes both aesthetics and well-being, ensuring comprehensive services
                        that make you look and feel your best.
                    </p>

                    <div className="flex mt-6">
                        <ServicesDashboard />
                    </div>

                    {/* Uncomment and use the modal if needed
                    <article className="flex flex-wrap gap-20 w-full md:w-4/5 lg:w-4/5 mt-4 justify-center" data-aos='zoom-in-up'>
                        {servicesCardData.map((service, index) => (
                            <div key={index}>
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
                    */}
                </div>
            </div>
        </section>
    );
};

export default Services;
