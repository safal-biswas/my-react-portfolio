import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

import cpp from "../assets/logo/cpp.png";
import python from "../assets/logo/python.png";
import java from "../assets/logo/java.png"
import arduino from "../assets/logo/arduino.png"

import wordpress from "../assets/logo/wordpress.png"
import photoshop from "../assets/logo/hotoshop.png"
import illustrator from "../assets/logo/illustrator.png"



const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 className="text-[#E44D26]" />, // HTML branding color
        percentage: 97,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="text-[#2965F1]" />, // CSS branding color
        percentage: 85,
    },
    {
        name: "JavaScript",
        icon: <FaJs className="text-[#F7DF1E]" />, // JavaScript branding color
        percentage: 80,
    },
    {
        name: "React",
        icon: <FaReact className="text-[#61DBFB]" />, // React branding color
        percentage: 75,
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#68A063]" />, // Node.js branding color
        percentage: 70,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38B2AC]" />, // Tailwind CSS branding color
        percentage: 80,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#4DB33D]" />, // MongoDB branding color
        percentage: 70,
    },
    {
        name: "Git",
        icon: <FaGitAlt className="text-[#F1502F]" />, // Git branding color
        percentage: 85,
    },
];


const languages = [
    {
        name: "C++",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={cpp} className="object-fill" />
        </div>,
        percentage: 85,
    },
    {
        name: "Python",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={python} className="object-fill" />
        </div>,
        percentage: 80,
    },
    {
        name: "Java",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={java} className="object-fill" />
        </div>,
        percentage: 70,
    },
    {
        name: "Arduino",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={arduino} className="object-fill" />
        </div>,
        percentage: 85,
    },

];

const softwares = [
    {
        name: "Wordpress",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={wordpress} className="object-fill" />
        </div>,
        percentage: 85,
    },
    {
        name: "Adobe Photoshop",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={photoshop} className="object-fill" />
        </div>,
        percentage: 95,
    },
    {
        name: "Adobe Illustrator",
        icon: <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex justify-center items-center">
            <img src={illustrator} className="object-fill scale-75" />
        </div>,
        percentage: 95,
    },
];


function Skills() {
    return (
        <div
            id="skills"
            className="mx-auto bg-gradient-to-br from-darkBlue to-violet pt-10 md:pt-24 pb-16"
        >
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h3 className="text-sm md:text-base text-accent font-bold mb-2 uppercase">
                    My Expertise
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold pb-4 text-lightGray mb-4">
                    Professional Skills
                </h1>

            </motion.div>

            {/* Skills Container */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full px-4 sm:px-8 lg:px-20 mx-auto"
            >
                <p className="text-base md:text-xl text-lightGray px-4 mb-4 lg:mb-8 font-semibold text-center">
                    Technical skills to deliver high-quality software solutions
                </p>
                <div className="grid grid-cols-2 justify-between md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-6 mb-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            className=""
                        >
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <div className="text-4xl">{skill.icon}</div>
                                <h3 className="text-sm text-center xl:text-lg font-medium text-lightGray pl-2 md:pl-0">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="mt-4 hidden md:block">
                                <div className="relative w-full h-2 bg-lightGray rounded-md overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.percentage}%` }}
                                        transition={{ duration: 1 }}
                                        className="absolute top-0 left-0 h-full bg-accent"
                                    ></motion.div>
                                </div>
                                <p className="text-right text-sm lg:text-base text-lightGray mt-1">
                                    {skill.percentage}%
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="block md:flex items-start gap-x-16 lg:mt-20">
                {/* Languages Container */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full px-4 sm:px-8 lg:px-10 xl:px-20 mx-auto"
                >
                    <p className="text-base md:text-xl text-lightGray px-4 mb-4 font-semibold text-center">
                        Language Proficiency
                    </p>
                    <div className="grid grid-cols-2 justify-between md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-6 mb-10">
                        {languages.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 },
                                }}
                                className=""
                            >
                                <div className="flex items-center space-x-2 md:space-x-4">
                                    <div className="text-4xl">{skill.icon}</div>
                                    <h3 className="text-sm text-center xl:text-lg font-medium text-lightGray pl-2 md:pl-0">
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="mt-4 hidden md:block">
                                    <div className="relative w-full h-2 bg-lightGray rounded-md overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1 }}
                                            className="absolute top-0 left-0 h-full bg-accent"
                                        ></motion.div>
                                    </div>
                                    <p className="text-right text-sm lg:text-base text-lightGray mt-1">
                                        {skill.percentage}%
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Software Container */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full px-4 sm:px-8 lg:px-10 xl:px-20 mx-auto"
                >
                    <p className="text-base md:text-xl text-lightGray px-4 mb-4 font-semibold text-center">
                        Software Expertise
                    </p>
                    <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 mb-10">
                        {softwares.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 },
                                }}
                                className=""
                            >
                                <div className="flex items-center space-x-2 md:space-x-4">
                                    <div className="text-4xl">{skill.icon}</div>
                                    <h3 className="text-sm text-center xl:text-lg font-medium text-lightGray pl-2 md:pl-0">
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="mt-4 hidden md:block">
                                    <div className="relative w-full h-2 bg-lightGray rounded-md overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1 }}
                                            className="absolute top-0 left-0 h-full bg-accent"
                                        ></motion.div>
                                    </div>
                                    <p className="text-right text-sm lg:text-base text-lightGray mt-1">
                                        {skill.percentage}%
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>

        </div>
    );
}

export default Skills;
