import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItem = [
        {link: "Home", path: "/"},
        {link: "Product", path: "product"},
        {link: "Service", path: "service"},
        {link: "Gallery", path: "gallery"},
        {link: "Contact", path: "contact"},
    ]

    return (
        <>
                <div className="container mb-20">
                    <nav className="bg-white flex items-center justify-between fixed top-0 left-0 right-0 lg:px-24 border-b-[1px] border-slate-300">
                        <div className="px-4">
                            <a href="/" className="font-bold flex py-3"><img src={logo} alt="logo" className="w-40"/></a>
                        </div>
                        <div className="items-center px-4">
                            <ul className="md:flex space-x-2 hidden">
                                {
                                    navItem.map(({link,path}) => (<Link
                                        key={link}
                                        to={path}
                                        className='block cursor-pointer hover:text-primary hover:bg-slate-100 px-3 py-4 my-3 rounded-lg lg:px-5'
                                    >
                                        {link}
                                    </Link>
                                    ))
                                }
                            </ul>

                            <div className='md:hidden'>
                                <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-slate-300'>
                                    {
                                        isMenuOpen ? (<FaXmark className='w-16 h-6 text-slate-800'/>) : (<FaBars className='w-16 h-6 text-slate-800'/>)
                                    }
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className={`left-0 rounded-b-lg bg-primary ${isMenuOpen ? "block fixed top-[60px] right-0 left-0" : "hidden"}`}>
                                  {
                                    navItem.map(({link,path}) => (<Link key={link} to={path} className=' px-5 py-3 h-full w-full block text-slate-100 hover:bg-blue-800 rounded-lg'>{link}</Link>))
                                  }  
                    </div>
                </div>
        </>
    );
};

export default Navbar;