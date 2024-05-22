import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const MainMenu = () => {
    return (
        <ul className='ul'>
              
            <li className='nav-link px-6 text-spanishBlue font-medium'>
                <ScrollLink to='about' smooth={true} duration={500}>
                    About Us
                </ScrollLink>
            </li>

           <li className='nav-link px-6 text-spanishBlue font-medium'>
                <ScrollLink to='services' smooth={true} duration={500}>
                    Services
                </ScrollLink>
            </li>
              
            <li className='nav-link px-6 text-spanishBlue font-medium'>
                <ScrollLink to='team' smooth={true} duration={500}>
                    Our Team
                </ScrollLink>
            </li>

            <li className='nav-link px-6 text-spanishBlue font-medium'>
                <ScrollLink to='reviews' smooth={true} duration={500}>
                     Testimonials
                </ScrollLink>
            </li>

            <li className='nav-link px-6 text-spanishBlue font-medium'>
                <ScrollLink to='faq' smooth={true} duration={500}>
                    FAQs
                </ScrollLink>
            </li>

            <li className='nav-link pl-6 text-spanishBlue font-medium'>
                <ScrollLink to='contact' smooth={true} duration={500}>
                    Contact Us
                </ScrollLink>
            </li>
        </ul>      
    )
}

export default MainMenu;
