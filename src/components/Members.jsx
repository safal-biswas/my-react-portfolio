import React from "react";
import { Carousel } from "flowbite-react";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import joy from "../assets/images/joy.png";
import safal from "../assets/images/safal.png";

const teamMembers = [
    {
        name: "Joy Dutto",
        age: 28,
        location: "Bangladesh",
        role: "Graphics Designer, Web Developer & Digital Marketing Expert",
        description:
            "I specialize in competitive programming and front-end technologies to build interactive and user-friendly websites. My strengths include adaptability, problem-solving, and a continuous learning mindset.",
        image: joy,
    },
    {
        name: "Safal Biswas",
        age: 26,
        location: "Bangladesh",
        role: "Web Developer, Game Developer & SEO Expert",
        description:
            "I specialize in competitive programming and front-end technologies to build interactive and user-friendly websites. My strengths include adaptability, problem-solving, and a continuous learning mindset.",
        image: safal,
    },
];

function Members() {
    return (
        <div
            id="members"
            className="max-w-screen-2xl mx-auto bg-gradient-to-br from-darkBlue via-violet to-purple pt-24"
        >
            {/* Title Section */}
            <div className="text-center mb-10 px-4">
                <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-3xl md:text-4xl font-bold text-lightGray uppercase">
                    Our Team
                </motion.h1>
            </div>

            {/* Carousel Container */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="w-full px-4 sm:px-8 lg:px-16 mx-auto flex justify-center items-center h-[75vh] md:h-[50vh] lg:h-[60vh] xl:h-[45vh]">
                <Carousel slideInterval={4000} className="w-full h-full overflow-hidden">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse lg:flex-row items-center justify-end gap-12 h-full"
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/3 flex justify-center items-center relative lg:scale-90">
                                {/* Radial Animated Border */}
                                <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-4 lg:border-8 border-dotted border-accent animate-spin-slow z-0"></div>
                                <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-tl from-darkBlue via-violet to-purple z-10"></div>
                                {/* Image */}
                                <img
                                    src={member.image}
                                    alt={`${member.name}`}
                                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full z-20"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-2/3 text-center lg:text-left lg:px-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-lightGray">
                                    I'm <span className="text-accent uppercase">{member.name}</span> - {member.role}
                                </h2>
                                <p className="text-sm md:text-base mt-4 text-lightGray leading-relaxed">
                                    {member.description}
                                </p>

                                {/* Contact Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 mt-6">
                                    <div className="flex justify-center lg:justify-start gap-2">
                                        <span className="text-lightGray font-semibold">Name:</span>
                                        <span className="text-lightGray">{member.name}</span>
                                    </div>
                                    <div className="flex justify-center lg:justify-start gap-2">
                                        <span className="text-lightGray font-semibold">Age:</span>
                                        <span className="text-lightGray">{member.age}</span>
                                    </div>
                                    <div className="flex justify-center lg:justify-start gap-2">
                                        <span className="text-lightGray font-semibold">From:</span>
                                        <span className="text-lightGray">{member.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </motion.div>
        </div>
    );
}

export default Members;
