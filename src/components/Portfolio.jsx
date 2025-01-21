import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from '../variants';
import { useSwipeable } from "react-swipeable";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


import joy from "../assets/images/joy.png";
import safal from "../assets/images/safal.png";
import arduino from "../assets/images/arduino.png";
import graphics_designing from "../assets/images/graphics_designing.png";
import web_development from "../assets/images/web_development.png";
import game_development from "../assets/images/game_development.png";
import seo from "../assets/images/seo.png";

const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [activeService, setActiveService] = useState(null); // State for active service
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [fullViewImage, setFullViewImage] = useState(null);


    const handleNext = () => {
        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
        );
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
        );
    };

    const handleCenterClick = (service) => {
        setActiveService(service); // Set active service to display grid
    };

    const handleSubCategoryClick = (subCategory) => {
        setActiveSubCategory(subCategory); // Set active subcategory
    };

    const handleFullViewImage = (image) => {
        setFullViewImage(image); // Set full view image
    };

    const handleCloseModal = () => {
        setActiveService(null); // Close the modal
        setActiveSubCategory(null);
    };

    const works = [

        {
            id: 1,
            title: "Web Development",
            description: "Skilled in building responsive and dynamic websites.",
            image: web_development,
            subImages: [joy, safal, joy, safal],
        },
        {
            id: 2,
            title: "Graphics Designing",
            description: "Expertise in creating modern designs and visuals.",
            image: graphics_designing,
            subCategories: [
                {
                    title: "Bi-fold",
                    description: "Bi-fold description here",
                    images: [joy, safal, joy, safal],
                },
                {
                    title: "Tri-fold",
                    description: "Tri-fold description here",
                    images: [safal, joy, safal, joy],
                },
                {
                    title: "Brochure",
                    description: "Brochure description here",
                    images: [joy, safal, joy, safal],

                },
                {
                    title: "Roll-up Banner",
                    description: "Roll-up Banner description here",
                    images: [safal, joy, safal, joy],

                },
            ],
        },

        {
            id: 3,
            title: "Game Development",
            description: "Developing engaging and immersive games.",
            image: game_development,
            subImages: [safal, joy, safal, joy],

        },
        {
            id: 4,
            title: "Arduino Projects",
            description: "Building innovative solutions with Arduino.",
            image: arduino,
            subImages: [joy, joy, joy, joy],

        },
        {
            id: 5,
            title: "Problem SOLVING",
            description: "Excelling in solving complex challenges.",
            image: seo,
            subImages: [joy, joy, joy, joy],

        },
    ];

    const positions = ["center", "left", "farLeft", "right", "farRight"];

    const imageVariants = {
        farLeft: { x: "-60%", scale: 0.5, zIndex: 1 },
        left: { x: "-40%", scale: 0.7, zIndex: 2 },
        center: { x: "0%", scale: 1, zIndex: 3 },
        right: { x: "40%", scale: 0.7, zIndex: 2 },
        farRight: { x: "60%", scale: 0.5, zIndex: 1 },
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
            className=" mx-auto w-screen bg-gradient-to-br from-darkBlue to-violet text-lightGray overflow-hidden flex flex-col justify-center pt-24  lg:pb-20"
        >
            {/* Title Section */}
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            >
                <div>
                    <h3 className="text-sm md:text-base text-accent font-bold mb-2 text-center uppercase">Portfolio</h3>
                    <h1 className="text-3xl md:text-4xl font-bold pb-8 md:pb-16 text-lightGray text-center">My Recent Works</h1>
                </div>
            </motion.div>
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
                            <>
                                <div className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 py-1 rounded text-lightGray text-xl font-semibold uppercase text-center">
                                    {service.title}
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:cursor-pointer">
                                    <h2 className="text-2xl md:3xl font-semibold mb-8 text-lightGray uppercase">{service.title}</h2>
                                    <p className="text-xl text-lightGray mb-4">See More</p>
                                    <FaArrowRight className="text-2xl text-lightGray" />
                                </div>
                            </>
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
                        <div className="relative bg-gradient-to-r from-darkBlue to-violet p-8 rounded-lg h-[90vh] w-[90vw] mx-auto text-center overflow-x-hidden overflow-auto">
                            <h2 className="text-3xl font-bold mb-4 text-accent uppercase">
                                {activeSubCategory
                                    ? activeSubCategory.title // Display subcategory title if active
                                    : activeService.title} {/* Display service title otherwise */}
                            </h2>
                            <p className="mb-6 text-white text-sm">
                                {activeSubCategory
                                    ? activeSubCategory.description // Subcategory description (optional)
                                    : activeService.description} {/* Main service description */}
                            </p>
                            <div className="mt-20 mb-10 flex justify-center gap-8">
                                {activeSubCategory ? (
                                    <>
                                        <a href="#contact">
                                            <button className="py-2 px-6 transition-all duration-300 rounded-md hover:bg-accentLight hover:text-darkGray shadow-md bg-transparent border-2 border-accent hover:border-accentLight active:scale-90 text-accent font-semibold">
                                                Source Code
                                            </button>
                                        </a>
                                        <a href="#contact" className="flex gap-4">
                                            <button className="py-2 px-6 transition-all duration-300 rounded-md hover:bg-accentLight hover:text-darkGray shadow-md bg-transparent border-2 border-accent hover:border-accentLight active:scale-90 text-accent font-semibold">
                                                Live Preview
                                            </button>
                                        </a>
                                    </>
                                ) : null}
                            </div>


                            {/* Render subcategories or images */}
                            {activeSubCategory ? (
                                /* Display subcategory images */
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={gridVariants}
                                >
                                    {activeSubCategory.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="w-full h-full overflow-hidden rounded-lg flex justify-center items-center"
                                            variants={gridItemVariants}
                                        >
                                            <img
                                                src={image}
                                                alt={`Subcategory Grid ${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                /* Display main service subcategories */

                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={gridVariants}
                                >

                                    {activeService.subCategories ? (
                                        activeService.subCategories.map((subcategory, index) => (
                                            <motion.div
                                                key={index}
                                                className="w-full h-full overflow-hidden rounded-lg flex flex-col justify-center items-center bg-gradient-to-tr from-darkBlue to-violet p-4"
                                                variants={gridItemVariants}
                                                onClick={() => handleSubCategoryClick(subcategory)} // Handle subcategory click
                                            >
                                                <img
                                                    src={subcategory.images[0]} // Use first image as thumbnail
                                                    alt={`Subcategory ${index}`}
                                                    className="w-full h-40 object-cover mb-2 rounded-lg"
                                                    onClick={() => handleFullViewImage} // change the stage of fullViewImage
                                                />
                                                <h3 className="text-xl font-semibold text-lightGray uppercase">
                                                    {subcategory.title}
                                                </h3>
                                            </motion.div>
                                        ))
                                    ) : (
                                        activeService.subImages.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                className="w-full h-full overflow-hidden rounded-lg flex flex-col justify-center items-center bg-gradient-to-tr  from-darkBlue to-violet"
                                                variants={gridItemVariants}
                                            >
                                                <img
                                                    src={image} // Use first image as thumbnail
                                                    alt={`${index}`}
                                                    className="w-full h-full object-cover rounded-lg"
                                                    onClick={() => handleFullViewImage} // change the stage of fullViewImage

                                                />
                                            </motion.div>
                                        ))
                                    )}
                                </motion.div>
                            )}

                            <button
                                className="absolute top-4 right-4 text-white text-3xl"
                                onClick={handleCloseModal}
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full Image View Modal */}
            {fullViewImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <img
                        src={fullViewImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[90%] rounded-lg"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={() => setFullViewImage(null)}
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default ImageSlider;
