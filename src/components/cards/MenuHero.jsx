import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

const MenuHero = ({ isMenuOpen }) => {
    return (
        <article className='flex flex-col justify-center absolute top-0 right-0 z-[100] rounded-3xl 
            bg-custom-gradient-bg-cards pr-52 pl-12 pt-24 pb-16 shadow-lg shadow-midnight'
            style={{
                transform: isMenuOpen ? 'scale(1)' : 'scale(0)',
                zIndex: '100', // Ensure a high z-index to be on top
                position: 'absolute', // Ensure proper positioning
                transition: 'transform 0.3s ease-in-out'
            }}
        >
            {/* Menu items */}
            <ul className="flex flex-col items-start gap-3.5" >
                {['index', 'about', 'services', 'staff', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li key={index}                            
                            className='text-zinc-50 text-[4rem] leading-[50px] font-anybody font-[500] uppercase
                            hover:text-opacity-65'
                        >
                            <ScrollLink to={item} smooth={true} duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </ScrollLink>
                        </li>
                    ))}

                <div className="flex flex-col mt-9">
                    <p className='ml-2 text-[1.1rem] text-indigo-900 font-[600]'>
                        +1 991 318 66 99
                    </p>
                    <p className='ml-2 text-[1.1rem] text-indigo-900 font-[600]'>
                        info@radiantdental.com 
                    </p>
                </div>

                <div className='flex flex-col justify-between items-center gap-8 absolute right-[-10rem] bottom-2'>
                    <FaInstagram 
                        style={{ fontSize: '2rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                    />
                    <AiFillLinkedin
                        style={{ fontSize: '2rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                    <BsTwitterX 
                        style={{ fontSize: '1.8rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s', marginTop: '4px' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />       
                </div>
           
            </ul>      
        </article>
    )
}

export default MenuHero;
