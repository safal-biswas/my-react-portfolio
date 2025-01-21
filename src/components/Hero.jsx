import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from '../assets//lottiefiles/hero_animation.json';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Hero() {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedTextRef.current, {
            strings: ["Programmer", "Web Developer", "Graphics Designer"],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div
                id="home"
                className=" mx-auto w-screen lg:h-screen flex flex-col-reverse gap-y-4 md:gap-y-10 lg:flex-row items-center justify-center px-5 pt-20 md:pt-40 lg:pt-10 bg-gradient-to-br from-darkBlue to-violet text-lightGray overflow-x-hidden lg:overflow-hidden">
                {/* Left Section */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-1/2 text-center lg:text-left lg:pl-20 xl:pl-34">
                    <h1 className="text-xl md:text-2xl font-normal">Hello!</h1>
                    <h2 className="text-3xl md:text-5xl xl:6xl mt-2 lg:mt-4 font-bold">I'm <span className="text-accent">Safal Biswas</span></h2>
                    <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl lg:mt-4">
                        a <span ref={typedTextRef} className="text-accent font-semibold pt-2"></span>
                    </p>
                    <p className="text-sm md:text-base mt-2 md:mt-8 md:px-4 lg:px-0">Also expertise in C++, JavaScript, and Python. I build responsive, dynamic web applications and create compelling designs using Adobe Illustrator. My competitive programming background sharpens my analytical skills, driving innovation and continuous learning in every project I tackle.</p>
                    <div className="sm:flex gap-8 justify-center lg:justify-start mt-8 mb-16 lg:mb-0">
                        <a href="#contact" className="block sm:inline mb-6 sm:mb-0"><button className="btn bg-accent text-white px-6 py-2 rounded hover:bg-accentLight transition-all">Hire Me</button></a>
                        <a href="../assets/documents/Safal_Biswas_Resume.pdf" download="Safal_Biswas_Resume.pdf"><button className="py-2 px-6 transition-all duration-300 rounded-md hover:bg-accentLight hover:text-darkGray shadow-md bg-transparent border-2 border-accent hover:border-accentLight active:scale-90 text-accent font-semibold">Download CV</button></a>
                    </div>
                </motion.div>

                {/* Right Section (Image) */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-1/2 flex justify-center items-center relative">
                    {/* Lottie Animation */}
                    <div className="w-full mx-auto scale-150">
                        <Player
                            autoplay
                            loop
                            src={heroAnimation}
                            className="w-60 md:w-96 lg:w-80 xl:w-96 2xl:w-96 2xl:scale-150"
                        // className="-translate-x-16 sm:-translate-x-36 md:-translate-x-40 lg:-translate-x-28 xl:-translate-x-32"
                        />
                    </div>
                </motion.div>
            </div>
        </>

    );
}

export default Hero;

// Tailwind Custom Classes for Dark Mode (to be added in your Tailwind configuration)
/* 
    theme: {
        extend: {
            colors: {
                darkGray: '#1a202c', // Background
                lightGray: '#a0aec0', // Text
                accent: '#38b2ac', // Accent
                accentLight: '#81e6d9', // Hover Accent
            }
        }
    }
*/
