import { Button, Navbar } from "flowbite-react";


function MyNavbar() {

    return (
        <Navbar fluid className='bg-gradient-to-b from-violet to-darkBlue py-4 fixed top-0 left-0 w-full z-50'>
            <Navbar.Brand href="#" className='lg:pl-4 md:pb-4 lg:pb-0'>
                <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-semibold dark:text-white text-accent ml-4">Safal Biswas</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <a href="../assets/documents/Safal_Biswas_Resume.pdf" download="Safal_Biswas_Resume.pdf">
                    <button className="btn hidden xl:block mr-2" >Download CV</button>
                </a>
                <Navbar.Toggle className='text-lightGray bg-transparent hover:bg-transparent' />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#home" className='nav-item group'>Home
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#about" className='nav-item group'>About Me
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#skills" className='nav-item group'>Skills
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#services" className='nav-item group'>Services
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#portfolio" className='nav-item group'>Portfolio
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#education" className='nav-item group'>Education
                    <span className="nav-transition"></span>
                </Navbar.Link>
                <Navbar.Link href="#contact" className='nav-item group'>Contact
                    <span className="nav-transition"></span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
