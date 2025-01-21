import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import safal from "../assets/images/safal.png";


const teamMembers = [
    {
        name: "Safal Biswas",
        age: 26,
        location: "Dhaka, Bangladesh",
        role: " Programmer, Web Developer & Graphics Designer",
        description:
            "I specialize in competitive programming and front-end technologies to build interactive and user-friendly websites. My strengths include adaptability, problem-solving, and a continuous learning mindset.",
        image: safal,
    },
];

function Skills() {

    return (
        <div
            id="education"
            className=" mx-auto bg-gradient-to-tr from-darkBlue to-violet pt-24"
        >
            {/* Title Section */}
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            >
                <div>
                    <h3 className="text-sm md:text-base text-accent font-bold mb-2 text-center uppercase">Education</h3>
                    <h1 className="text-3xl md:text-4xl font-bold pb-8 md:pb-16 text-lightGray text-center">My Journey</h1>
                </div>
            </motion.div>

            {/* Container */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="w-full px-4 sm:px-8 lg:px-16 mx-auto flex justify-center items-center py-10  h-full">
                <div className="w-full h-full overflow-hidden">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse lg:flex-row items-center justify-end gap-12"
                        >

                            {/* Text Section */}
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}

                                className="w-full lg:w-2/3 text-center lg:text-left lg:px-4">
                                <div>

                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Skills;
