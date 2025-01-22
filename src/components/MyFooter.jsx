import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/logo/logo.svg'

function MyFooter() {
    return (
        <Footer container className='bg-gradient-to-b from-darkBlue via-violet to-darkBlue rounded-none'>

            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between">
                    <div className='mb-4 md:mb-0'>
                        <Footer.Brand
                            href="#"
                            // src={logo}
                            name={<span className="text-accent text-2xl md:3xl">Safal Biswas</span>}
                        />
                    </div>
                    {/* <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" className='text-lightGray' />
                            <Footer.LinkGroup col className='text-lightGray'>
                                <Footer.Link href="#">Designing</Footer.Link>
                                <Footer.Link href="#">Development</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" className='text-lightGray' />
                            <Footer.LinkGroup col className='text-lightGray'>
                                <Footer.Link href="#">Fiverr</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className='text-lightGray' />
                            <Footer.LinkGroup col className='text-lightGray'>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div> */}

                    <div className="">
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="https://github.com/safal-biswas" icon={BsGithub} className='text-lightGray' />
                            <Footer.Icon href="https://codeforces.com/profile/noob_Solver" icon={SiCodeforces} className='text-lightGray' />
                            <Footer.Icon href="https://leetcode.com/u/safalbiswas/" icon={SiLeetcode} className='text-lightGray' />
                            <Footer.Icon href="https://linkedin.com/in/safal-biswas/" icon={FaLinkedin} className='text-lightGray' />
                            <Footer.Icon href="#" icon={BsFacebook} className='text-lightGray' />
                            <Footer.Icon href="https://www.fiverr.com/safal_biswas/buying?source=avatar_menu_profile#!" icon={TbBrandFiverr} className='text-lightGray' />
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex md:justify-center">
                    <Footer.Copyright href="#" by="Safal Biswas™" year={2024} className='text-lightGray' />
                </div>
            </div>
        </Footer >
    )
}

export default MyFooter
