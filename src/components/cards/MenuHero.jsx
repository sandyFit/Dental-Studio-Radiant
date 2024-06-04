import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

const MenuHero = ({ isMenuOpen }) => {
    return (
        <article className='flex flex-col justify-center absolute top-0 right-0 z-[40] rounded-3xl 
            bg-custom-gradient-bg-cards pr-20 pl-12 pt-24 pb-16 shadow-lg shadow-midnight '
            style={{
                transform: isMenuOpen ? 'scale(1)' : 'scale(0)',
                transformOrigin: 'top right',
                transition: 'transform 0.3s ease-in-out',
                maxWidth: 'calc(100vw - 2rem)', // Ensure it doesn't exceed the viewport width
                overflowX: 'hidden'
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
                        +1 666 333 69 69
                    </p>
                    <p className='ml-2 text-[1.1rem] text-indigo-900 font-[600]'>
                        info@radiantdental.com 
                    </p>
                </div>

                <div className='flex flex-col justify-between items-center gap-8 mt-10'
                    style={{zIndex: 1000}}>
                    <FaInstagram 
                        style={{ fontSize: '2rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                    />
                    <AiFillLinkedin
                        style={{ fontSize: '2rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                    <BsTwitter 
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
