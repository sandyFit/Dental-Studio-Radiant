import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const MenuCurtain = ({ isMenuOpen }) => {
    
    // Define the base delay and the increment for each subsequent item
    const baseDealy = 100 // Starting delay in milliseconds
    const delayIncrement = 200 // Delay increment for each item

    return (
        <article className='flex flex-col justify-center
            rounded-3xl bg-custom-gradient-bg-cards p-36 menu-article z-30'
            style={{
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
            }}
        >
            {/* Menu items */}

            <ul className="flex flex-col items-start gap-6" >
                {/* Dynamivally setting the data-aos based on item index */}
                {['hero', 'about', 'services', 'team', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'
                            data-aos="fade-up"
                            data-aos-delay={`${baseDealy + index * delayIncrement}`} // Calcualte delay
                            key={item}
                        >
                            <ScrollLink to={item} smooth={true} duration={500}>
                                {/* Capitalizing the first character and eliminating posible hyphens */}
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </ScrollLink>
                        </li>
                    ))}
           
            </ul>      
        </article>
    )
}

export default MenuCurtain;
