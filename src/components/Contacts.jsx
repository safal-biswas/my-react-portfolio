import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../assets/lottiefiles/contact_animation.json";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

function Contacts() {
    const [success, setSuccess] = useState(false); // State to manage the success popup
    const [failed, setFailed] = useState(false); // State to manage the failed popup

    const handleSuccess = () => {
        setSuccess(false);
    };

    const handleFailed = () => {
        setFailed(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a9934537-f5d5-471a-a5ea-462d17399dd1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                setSuccess(true); // Show success popup
                event.target.reset(); // Clear the form inputs
            } else {
                setFailed(true); // Show failed popup
                console.error("Failed to send message:", res.message || "Unknown error");
            }
        } catch (error) {
            setFailed(true); // Show failed popup
            console.error("An unexpected error occurred:", error.message || "Unknown error");
        }
    };

    return (
        <>
            <div
                id="contact"
                className=" mx-auto w-screen p-6 overflow-hidden bg-gradient-to-br from-darkBlue to-violet text-lightGray pt-20"
            >
                {/* Title Section */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div>
                        <h3 className="text-sm md:text-base text-accent font-bold mb-2 text-center uppercase">Get In Touch</h3>
                        <h1 className="text-3xl md:text-4xl font-bold pb-8 md:pb-8 text-lightGray text-center">Contact Me</h1>
                    </div>
                </motion.div>

                <div className="flex justify-center">
                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-y-2 items-end justify-center w-[95%] mx-auto">
                        <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col justify-center">
                            {/* Lottie Animation */}
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="w-full">
                                <Player
                                    autoplay
                                    loop
                                    src={contactAnimation}
                                    className="w-80 md:w-96"
                                />
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="flex flex-col justify-center items-start">
                                {/* Phone */}
                                <div className="flex items-center mb-4 md:mr-8">
                                    <FaWhatsapp className="text-accent text-2xl mr-3" />
                                    <span className="text-lightGray text-base md:text-lg">
                                        +880 1781-036031
                                    </span>
                                </div>

                                {/* Email */}
                                <div className="flex items-center mb-4 md:mr-8">
                                    <MdOutlineEmail className="text-accent text-2xl mr-3" />
                                    <span className="text-lightGray text-base  md:text-lg">
                                        safalbiswas005@gmail.com
                                    </span>
                                </div>


                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="w-full lg:w-1/2 lg:px-8">
                            <form
                                onSubmit={onSubmit}
                                className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg flex flex-col gap-3 md:gap-6"
                            >
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="contact-fields hover:bg-gray-900"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="contact-fields hover:bg-gray-900"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="contact-fields hover:bg-gray-900"
                                    required
                                />
                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="Message"
                                    className="contact-fields resize-none hover:bg-gray-900"
                                    required
                                ></textarea>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="btn w-full md:w-1/2"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {success && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-green-500 mb-2">
                            Success!
                        </h2>
                        <p className="mb-4">
                            Your message has been sent successfully. <br />
                            I'll contact you as soon as possible.
                        </p>
                        <button className="btn" onClick={handleSuccess}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Failed Popup */}
            {failed && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-red-500 mb-2">Oops!</h2>
                        <p className="mb-4">
                            Something went wrong while sending your message. <br />
                            Please check your internet connection or try again later.
                        </p>
                        <button className="btn" onClick={handleFailed}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contacts;
