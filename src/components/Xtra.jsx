import React, { useState } from 'react';
import logo from '../assets/logo/logo.svg';
import { Navbar } from "flowbite-react";
import { RiArrowDropDownLine } from "react-icons/ri";

const pages = [
    {
        name: 'About',
        link: '#about',
        subName: [
            { name: 'Mission', link: '#mission' },
            { name: 'Vision', link: '#vision' }
        ]
    },
    {
        name: 'Services',
        link: '#services',
        subName: [
            { name: 'Graphics Designing', link: '#services' },
            { name: 'Web Development', link: '#services' },
            { name: 'Game Development', link: '#services' },
            { name: 'Video Editing', link: '#services_video_editing' },
            { name: 'Digital Marketing', link: '#services_digital_marketing' },
            { name: 'SEO', link: '#services_seo' },
            { name: 'Arduino Project', link: '#services_arduino_project' },
            { name: 'Problem Solving', link: '#services_problem_solving' },
            { name: 'Ethical Hacking', link: '#services_ethical_hacking' }
        ]
    },
    {
        name: 'Portfolio',
        link: '#portfolio',
        subName: [
            { name: 'Graphics Designing', link: '#portfolio' },
            { name: 'Web Development', link: '#portfolio' },
            { name: 'Game Development', link: '#portfolio' },
            { name: 'Video Editing', link: '#portfolio' },
            { name: 'Digital Marketing', link: '#portfolio' },
            { name: 'SEO', link: '#portfolio_seo' },
            { name: 'Arduino Project', link: '#portfolio' }
        ]
    }
];

function MyNavbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const handleItemClick = () => {
        setActiveDropdown(null); // Close the dropdown on item click
    };

    return (
        <Navbar fluid rounded className='bg-gradient-to-b from-violet via-violet to-darkBlue py-4 fixed top-0 left-0 w-full z-50'>
            <Navbar.Brand href="#" className='lg:pl-4 md:pb-4 lg:pb-0'>
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl text-lightGray font-semibold dark:text-white uppercase">Code<span className='text-accent'>Palette</span></span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <button className='btn mr-4 hidden lg:block'><a href="#contact">Order Now</a></button>
                <Navbar.Toggle className='text-lightGray bg-transparent hover:bg-transparent' />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#home" className='nav-item group uppercase' onClick={handleItemClick}>Home
                    <span className="nav-transition"></span>
                </Navbar.Link>
                {pages.map((page, index) => (
                    <div
                        className="relative group"
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link href={page.link} className='nav-item group uppercase cursor-pointer' onClick={handleItemClick}>
                            {page.name}
                            <RiArrowDropDownLine className='lg:inline hidden text-xl' />
                            <span className="nav-transition"></span>
                        </Navbar.Link>
                        {page.subName && activeDropdown === index && (
                            <div className="absolute left-0 bg-gradient-to-t from-violet via-violet to-darkBlue shadow-md rounded-md mt-2 transition-all duration-300">
                                <ul className="py-2">
                                    {page.subName.map((sub, subIndex) => (
                                        <li key={subIndex} className="relative group">
                                            <a
                                                href={sub.link}
                                                className="block px-4 py-2 text-lightGray hover:text-accent"
                                                onClick={handleItemClick}
                                            >
                                                {sub.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
                <Navbar.Link href="#members" className='nav-item group uppercase' onClick={handleItemClick}>Our Team
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#testimonials" className='nav-item group uppercase' onClick={handleItemClick}>Testimonials
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#contact" className='nav-item group uppercase' onClick={handleItemClick}>Contact
                    <span className="nav-transition"></span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
