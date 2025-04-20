import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleMenu, navItems }) => {
    return (
        <div className={`mobile_menu ${isOpen ? "open" : ''}`} onClick={toggleMenu}>
            <div className='mobile_menu_container' onClick={(e) => e.stopPropagation()}>
                <nav className='flex justify-center text-center'>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-item text-lg md:text-xl lg:text-2xl font-normal cursor-pointer 
                                        relative transition-colors duration-300 
                                        ${isActive ? 'active' : ''}`
                                    }
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <li className='nav-item text-lg md:text-xl lg:text-2xl font-normal cursor-pointer relative transition-colors duration-300 '>
                            Brochure
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
