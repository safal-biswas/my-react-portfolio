import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from '../variants';
import { useSwipeable } from "react-swipeable";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import joy from "../assets/images/joy.png";
import arduino from "../assets/images/arduino.png";
import problem_solving from "../assets/images/problem_solving.png";
import graphics_designing from "../assets/images/graphics_designing.png";
import web_development from "../assets/images/web_development.png";
import game_development from "../assets/images/game_development.png";
import seo from "../assets/images/seo.png";
import video_editing from "../assets/images/video_editing.png";
import digital_marketing from "../assets/images/digital_marketing.png";

const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
    const [activeService, setActiveService] = useState(null); // State for active service

    const handleNext = () => {
        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex) => (prevIndex + 1) % 7)
        );
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex) => (prevIndex + 6) % 7)
        );
    };

    const handleCenterClick = (service) => {
        setActiveService(service); // Set active service to display grid
    };

    const handleCloseModal = () => {
        setActiveService(null); // Close the modal
    };

    const works = [
        {
            id: 1,
            title: "Graphics Designing",
            description: "Expertise in creating modern designs and visuals.",
            image: graphics_designing,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 2,
            title: "Web Development",
            description: "Skilled in building responsive and dynamic websites.",
            image: web_development,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 3,
            title: "Game Development",
            description: "Developing engaging and immersive games.",
            image: game_development,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 4,
            title: "Arduino Projects",
            description: "Building innovative solutions with Arduino.",
            image: arduino,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 5,
            title: "SEO",
            description: "Excelling in solving complex challenges.",
            image: seo,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 6,
            title: "Video Editing",
            description: "Driving growth through effective marketing strategies.",
            image: video_editing,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
        {
            id: 7,
            title: "Digital Marketing",
            description: "Driving growth through effective marketing strategies.",
            image: digital_marketing,
            subImages: [joy, joy, joy, joy, joy, joy],
        },
    ];

    const positions = ["center", "left1", "left", "farLeft", "right", "right1", "farRight"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-30%", scale: 0.8, zIndex: 4 },
        left: { x: "-60%", scale: 0.6, zIndex: 3 },
        farLeft: { x: "-90%", scale: 0.4, zIndex: 2 },
        right: { x: "30%", scale: 0.8, zIndex: 4 },
        right1: { x: "60%", scale: 0.6, zIndex: 3 },
        farRight: { x: "90%", scale: 0.4, zIndex: 2 },
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handleBack,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const gridItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            id="portfolio"
            className="max-w-screen-2xl mx-auto w-screen bg-gradient-to-tr from-darkBlue via-violet to-purple text-lightGray overflow-hidden pb-10 flex flex-col justify-center pt-24 "
        >
            <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl md:text-4xl font-bold pb-8 md:pb-16 text-lightGray uppercase text-center"
            >
                My Recent Works
            </motion.h1>
            <div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                {...swipeHandlers}
                className="relative flex items-center justify-center bg-transparent h-[50vh] lg:h-[65vh]"
            >
                {works.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`absolute h-full rounded-xl overflow-hidden group hover:shadow-[0_0_25px_10px_rgba(122,43,255,0.6)]`}
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: "auto",
                            maxWidth: "90%",
                            maxHeight: "100%",
                        }}
                        onClick={() => {
                            if (positions[positionIndexes[index]] === "center") {
                                handleCenterClick(service);
                            }
                        }}
                    >
                        <img
                            src={service.image}
                            alt={`Slider ${index}`}
                            className="w-full h-full object-cover lg:aspect-[16/9]"
                        />
                        {positions[positionIndexes[index]] === "center" && (
                            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:cursor-pointer">
                                <h2 className="text-3xl font-semibold mb-8 text-lightGray uppercase">{service.title}</h2>
                                <p className="text-xl text-lightGray mb-4">See More</p>
                                <FaArrowRight className="text-2xl text-lightGray" />
                            </div>
                        )}
                    </motion.div>
                ))}
                <button
                    className="absolute top-1/2 left-0 lg:left-5 z-40 transform -translate-y-1/2"
                    onClick={handleBack}
                >
                    <FaArrowAltCircleLeft className="slider_btn" />
                </button>
                <button
                    className="absolute top-1/2 right-0 lg:right-5 z-40 transform -translate-y-1/2"
                    onClick={handleNext}
                >
                    <FaArrowAltCircleRight className="slider_btn" />
                </button>
            </div>

            {/* Modal for Image Grid */}
            <AnimatePresence>
                {activeService && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative bg-gradient-to-r from-darkBlue via-violet to-purple p-8 rounded-lg h-[90vh] w-[90vw] mx-auto text-center overflow-x-hidden overflow-auto">
                            <h2 className="text-3xl font-bold mb-4 text-accent uppercase">{activeService.title}</h2>
                            <p className="mb-6 text-white text-sm">{activeService.description}</p>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={gridVariants}
                            >
                                {activeService.subImages.map((image, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-full h-full overflow-hidden rounded-lg flex justify-center items-center"
                                        variants={gridItemVariants}
                                    >
                                        <img
                                            src={image}
                                            alt={`Grid ${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <button
                                className="absolute top-4 right-4 text-white text-2xl"
                                onClick={handleCloseModal}
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ImageSlider;
