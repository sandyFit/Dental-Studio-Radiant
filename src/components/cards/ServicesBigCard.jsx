import React from 'react';
import '../../assets/css/accordion.css'; // Adjust the path according to your project structure

const ServicesBigCard = () => {
    return (
        <article className="">
            <div className="bar-navigation">
                <ul className="accordion-bar-list" style={{ '--total': 4 }}>
                    <li className="accordion-bar-item" style={{ '--i': 0, '--color': 'var(--color-neutral-rose)' }} tabIndex="1">
                        <span className='accordion-bar-item-text mb-6'>
                            General Dentistry
                        </span>
                    </li>
                    <li className="accordion-bar-item" style={{ '--i': 1, '--color': 'var(--color-neutral-green)' }} tabIndex="2">
                        <span className='accordion-bar-item-text mb-7'>
                            Hygiene & Therapy
                        </span>
                    </li>
                    <li className="accordion-bar-item" style={{ '--i': 2, '--color': 'var(--color-neutral-purple)' }} tabIndex="3">
                        <span className='accordion-bar-item-text'>
                            Orthodontics
                        </span>
                    </li>
                    <li className="accordion-bar-item" style={{ '--i': 3, '--color': 'var(--color-neutral-blue)' }} tabIndex="4">
                        <span className='accordion-bar-item-text mb-8'>
                            Cosmetic Dentistry
                        </span>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default ServicesBigCard;
