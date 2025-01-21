import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from '../variants'
import graphics_designing from '../assets/gif/graphics_designing.gif'
import web_development from '../assets/gif/web_development.gif'
import game_development from '../assets/gif/game_development.gif'
import arduino_project from '../assets/gif/arduino_project.gif'
import problem_solving from '../assets/gif/problem_solving.gif'

const services = [
    {
        id: 1,
        image: web_development,
        title: "Web Development",
        description:
            "Skilled in web development, creating responsive, user-friendly websites with a focus on clean design, functionality, and modern technologies.",
        details: ["Responsive Design", "React Applications", "Backend Integration"]
    },
    {
        id: 2,
        image: problem_solving,
        title: "Problem Solving",
        description:
            "Strong problem-solving skills, adept at analyzing challenges and crafting efficient solutions through logical thinking and continuous learning.",
        details: ["Algorithm challenges", "Data structure optimization", "Logical puzzles"]
    },
    {
        id: 3,
        image: game_development,
        title: "Game Development",
        description:
            "Skilled in game development using Python and JavaScript, creating interactive, engaging games with a focus on logic, design, and user experience.",
        details: ["2D Games", "Physics-based games", "Multiplayer logic"]
    },
    {
        id: 4,
        image: arduino_project,
        title: "Arduino Project",
        description:
            "Experienced in Arduino project building, developing innovative solutions with a focus on hardware-software integration and efficient design.",
        details: ["Robotics", "Sensor Systems", "IoT Applications"],
    },
    {
        id: 5,
        image: graphics_designing,
        title: "Graphics Designing",
        description:
            "Experienced in graphic design, specializing in creating visually compelling designs, including brochures, flyers, and company profiles.",
        details: ["Brochure Design", "Flyer Design", "Company Profiles"],
    },
];

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    setTimeout(() => setIsVisible(true), 0);
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleExpand = (service) => {
        setSelectedService(service);
    };

    const handleClose = () => {
        setSelectedService(null);
    };

    return (
        <div
            ref={sectionRef}
            id="services"
            className="md:px-8 xl:px-16 2xl:20 mx-auto bg-gradient-to-tr from-darkBlue to-violet text-lightGray flex flex-col items-center justify-center pt-24 pb-10"
        >
            {/* <div className='w-full h-12 bg-transparent hidden lg:block' id='services'></div> */}


            {/* Title Section */}
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            >
                <div>
                    <h3 className="text-sm md:text-base text-accent font-bold mb-2 text-center uppercase">Services</h3>
                    <h1 className="text-3xl md:text-4xl font-bold pb-8 md:pb-16 text-lightGray text-center">What I do for you</h1>
                </div>
            </motion.div>

            {/* Container */}
            <motion.div
                className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-2 md:gap-6 px-2 sm:px-4"
                key={isVisible}
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
            // viewport={{ once: false, amount: 0.7 }}

            >

                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className={`relative bg-white rounded-lg shadow-md flex flex-col justify-around px-4 sm:px-4 h-48 md:h-72 w-full text-darkGray transition-all hover:shadow-[0_0_25px_10px_rgba(122,43,255,0.6)]
                            ${index === services.length - 1 ? "last-card" : ""} ${index === 3 ? "second-last-card" : ""}
                        `}
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        id={index === 1 ? "services1" : index === 4 ? "services2" : undefined}

                    // viewport={{ once: false, amount: 0.7 }}
                    >
                        <div className="flex justify-center">
                            <img src={service.image} className="w-16" />
                        </div>
                        <h2 className="text-base sm:text-xl font-semibold text-center">{service.title}</h2>
                        <p className="text-sm md:text-base text-center hidden md:block">{service.description}</p>
                        <div className="flex justify-center">
                            <button
                                className="btn bg-accent text-white px-4 py-2 rounded hover:bg-accentLight transition-all"
                                onClick={() => handleExpand(service)}
                            >
                                Expand
                            </button>
                        </div>
                    </motion.div>
                ))}


            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className="relative bg-white text-darkGray rounded-lg shadow-lg w-[80vw] lg:w-[50vw] p-8"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                {selectedService.title}
                            </h3>
                            <p className="mb-4">
                                {selectedService.description}
                            </p>
                            {selectedService && selectedService.details && Array.isArray(selectedService.details) && (
                                <ul className="list-disc pl-5 space-y-2">
                                    {selectedService.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                            <button
                                className="absolute top-4 right-4 hover:text-accent text-darkGray"
                                onClick={handleClose}
                            >
                                ✖
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
