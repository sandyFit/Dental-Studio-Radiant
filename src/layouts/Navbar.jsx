import React from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';
import Logo from '../components/ui/Logo';

const Navbar = () => {
    return (
        <nav className='bg-cyan-50 w-[96%] bg-opacity-45 h-[86px] mt-8 mx-auto rounded-[10px] flex items-center
            border-2 border-zinc-50'>
            <article className="flex items-center justify-between mx-24 w-full h-full relative">
                <Logo />
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg" className='absolute left-80 top-1/2 
                    transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <button className="flex">
                    <div className="group relative text-small-white flex items-center gap-4">
                        <span className="relative inline-flex overflow-hidden">
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                            group-hover:skew-y-12">
                                menu
                            </div>
                            <div className="absolute translate-y-[110%] skew-y-12 
                            transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                open
                            </div>
                        </span>
                        <div className="flex flex-col items-end cursor-pointer gap-[5px]">
                            <div className="line group-hover:w-[3.5rem] line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line group-hover:w-[3.5rem] line-3"></div>
                        </div>
                    </div>
                </button>
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg" className='absolute right-44 
                    top-1/2 transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>
            </article>
        </nav>
    );
};

export default Navbar;
