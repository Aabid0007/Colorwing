import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom';

import './Header.css'
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
           document.body.classList.toggle('no-scroll', !openMenu);
    };

    return (
        <header>
            <div className='container'>
                <Sidebar isOpen={openMenu} toggleMenu={toggleMenu} navItems={navItems} />
                <div className='header_section'>
                    <div className='logo_header'>
                        <h1 className='text-2xl font-light'>
                            Colorw
                            <span className="logo_img">
                                <img src={Logo} alt="" />
                            </span> ng
                        </h1>
                        <span>
                            <h6 className='text-[#fac8c9] font-light text-xs'>advertising LLC</h6>
                        </span>
                    </div>
                    <nav>
                        <ul className="flex gap-12 items-center">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `nav-item text-lg md:text-xl lg:text-2xl font-normal cursor-pointer relative transition-colors duration-300 
                                            ${isActive ? 'active' : ''}`
                                        }>

                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className='nav-item text-lg md:text-xl lg:text-2xl font-normal cursor-pointer relative transition-colors duration-300 '>
                                Brochure
                            </li>
                        </ul>
                    </nav>
                    <button className='hamburger' onClick={toggleMenu}>
                        <span className="material-symbols-outlined" >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header