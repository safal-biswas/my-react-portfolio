import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import safal from "../assets/images/safal.png";


import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const teamMembers = [
    {
        name: "Safal Biswas",
        email: "safalbiswas005@gmail.com",
        location: "Dhaka, Bangladesh",
        role: " Programmer, Web Developer & Graphics Designer",
        description:
            "I specialize in competitive programming and front-end technologies to build interactive and user-friendly websites. My strengths include adaptability, problem-solving, and a continuous learning mindset.",
        image: safal,
    },
];

function About() {

    return (
        <div
            id="about"
            className=" mx-auto bg-gradient-to-tr from-darkBlue to-violet pt-10 lg:pt-20"
        >
            {/* Title Section */}

            {/* Container */}
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="w-full px-4 sm:px-8 lg:px-10 xl:px-16 mx-auto flex justify-center items-center py-10 h-full"
            >
                <div className="w-full h-full overflow-hidden -px-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse lg:flex-row items-center w-full justify-end gap-12"
                        >
                            {/* Image Section */}
                            <div
                                className="w-full lg:w-1/3 flex justify-center items-center relative py-20">
                                {/* Radial Animated Border */}
                                <div className="absolute lg:hidden xl:block w-64 h-64 md:w-96 md:h-96 rounded-full border-4 lg:border-8 border-dotted border-accent animate-spin-slow z-0"></div>
                                <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-darkBlue z-10"></div>
                                {/* Image */}
                                <img
                                    src={member.image}
                                    alt={`${member.name}`}
                                    className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full z-20"
                                />
                            </div>

                            {/* Text Section */}
                            <div

                                className="w-full lg:w-2/3 text-center lg:text-left lg:px-4">
                                <div>
                                    <h3 className="text-sm md:text-xl text-accent font-bold mb-4 uppercase">Who Am I ?</h3>
                                    <h2 className="text-2xl md:text-3xl font-bold text-lightGray">
                                        I'm <span className="text-accent">{member.name}</span> - {member.role}
                                    </h2>
                                    <p className="text-sm md:text-base mt-4 text-lightGray leading-relaxed">
                                        {member.description}
                                    </p>

                                    {/* Contact Info */}
                                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 mt-10">
                                        <div className="flex justify-center lg:justify-start gap-2">
                                            <span className="text-lightGray font-semibold">Name:</span>
                                            <span className="text-lightGray">{member.name}</span>
                                        </div>
                                        <div className="flex justify-center lg:justify-start gap-2">
                                            <span className="text-lightGray font-semibold">From:</span>
                                            <span className="text-lightGray">{member.location}</span>
                                        </div>
                                        <div className="flex justify-center lg:justify-start gap-2">
                                            <span className="text-lightGray font-semibold">Email:</span>
                                            <span className="text-accentLight">{member.email}</span>
                                        </div>
                                    </div>
                                    {/* icons */}
                                    <div className="md:flex justify-center lg:justify-start items-center gap-x-4 lg:gap-x-8 mt-8 md:mt-16">
                                        <a href="../assets/documents/Safal_Biswas_Resume.pdf" download="Safal_Biswas_Resume.pdf">
                                            <button className="btn mr-6" >Download CV</button>
                                        </a>
                                        <div className="flex justify-center lg:justify-start items-center gap-4 lg:gap-8 mt-8 md:mt-0">
                                            <div className="w-16 h-1 rounded-lg bg-lightGray hidden xl:block"></div>
                                            <a href="https://github.com/safal-biswas"><BsGithub className="text-2xl text-accentLight" /></a>
                                            <a href="https://codeforces.com/profile/noob_Solver"><SiCodeforces className="text-2xl text-accentLight" /></a>
                                            <a href="https://leetcode.com/u/safalbiswas/"><SiLeetcode className="text-2xl text-accentLight" /></a>
                                            <a href="https://linkedin.com/in/safal-biswas/"><FaLinkedin className="text-2xl text-accentLight" /></a>
                                            <a href=""><BsFacebook className="text-2xl text-accentLight" /></a>
                                            <a href="https://www.fiverr.com/safal_biswas/buying?source=avatar_menu_profile#!"><TbBrandFiverr className="text-2xl text-accentLight" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default About;
