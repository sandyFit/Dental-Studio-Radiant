import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import BookOnlineBtn from '../ui/BookOnlineBtn';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';


const MenuCurtain = ({ isMenuOpen }) => {


    return (
        <article className='flex flex-col justify-center
            rounded-3xl bg-custom-gradient-bg-cards pl-52 pr-12 py-20 menu-article z-30 shadow-lg shadow-midnight'
            style={{
                transform: isMenuOpen ? 'scale-0' : 'scale-100'
            }}
        >
            {/* Menu items */}

            <ul className="flex flex-col items-end gap-3.5" >
                {/* Dynamivally setting the data-aos based on item index */}
                {['index', 'about', 'services', 'team', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        
                        <li key={index}                            
                            className='text-zinc-50 text-[4rem] leading-[50px] font-anybody font-[500] uppercase
                            hover:text-opacity-65'
                            // data-aos="fade-up"
                            // data-aos-delay={`${baseDealy + index * delayIncrement}`} Calcula delay
                            // key={item}
                        >
                            <ScrollLink to={item} smooth={true} duration={500}>
                                {/* Capitalizing the first character and eliminating posible hyphens */}
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </ScrollLink>
                        </li>
                    ))}

                <button className='btn-book-online-transparent px-12 py-2 mt-9'>
                    <BookOnlineBtn/>
                </button>

                <div className='flex flex-col justify-between items-center gap-8 absolute left-12 bottom-20'>
                    <FaInstagram 
                        style={{ fontSize: '2rem', color: '#d4d4d8', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
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

export default MenuCurtain;
