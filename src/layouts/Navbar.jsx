import React, {useState} from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';
import Logo from '../components/ui/Logo';
import MenuHero from '../components/cards/MenuHero';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='bg-indigo-100 w-[90.5%] bg-opacity-85 h-[88px] absolute top-8 left-16 rounded-[10px] 
            flex items-center border-[3px] border-zinc-50 z-[20]'>
            <article className="flex items-center justify-between mx-12 w-full h-full relative">
                <Logo />
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg" className='absolute left-80 top-1/2 
                    transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <button onClick={toggleMenu}
                    className="flex z-[1000]">
                    <div className="group relative text-small-dark flex items-center gap-2">
                        <span className="relative inline-flex overflow-hidden">
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                            group-hover:skew-y-12">
                                {isMenuOpen ? 'close' : 'menu'}
                            </div>
                            <div className="absolute translate-y-[110%] skew-y-12 
                            transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                {isMenuOpen ? 'close' : 'open'}
                            </div>
                        </span>
                        <div className="flex flex-col items-end cursor-pointer gap-[5px]">
                            <div className={`line group-hover:w-[3.5rem] line-1 ${isMenuOpen ? 'active' : ''}`}></div>
                            <div className={`line line-2 ${isMenuOpen ? 'active' : ''}`}></div>
                            <div className={`line group-hover:w-[3.5rem] line-3 ${isMenuOpen ? 'active' : ''}`}></div>
                        </div>
                    </div>
                </button>
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg" className='absolute right-44 
                    top-1/2 transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <div className="absolute -top-4 -right-12 ">
                    {isMenuOpen && (
                        <MenuHero isMenuOpen={isMenuOpen}/>
                    )}
                </div>

            </article>
        </nav>
    );
};

export default Navbar;
