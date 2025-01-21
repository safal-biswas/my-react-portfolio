import React from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
    {
        name: "Alice J.",
        profession: "Web Developer",
        comment:
            "This service exceeded my expectations! The team was highly skilled, professional, and attentive to details. I’ll definitely come back for future projects.",
        rating: 5,
    },
    {
        name: "Bob S.",
        profession: "Graphic Designer",
        comment:
            "Working with them was amazing! The designs were creative, and they delivered everything on time. Highly recommend for anyone needing top-notch work.",
        rating: 4.5,
    },
    {
        name: "Charlie B.",
        profession: "Project Manager",
        comment:
            "A great experience overall! The team was responsive and committed to delivering quality. A few minor tweaks were needed, but they handled them well.",
        rating: 4,
    },
    {
        name: "Diana P.",
        profession: "UI/UX Designer",
        comment:
            "Fantastic attention to detail! Their creativity and execution were exceptional, making our project stand out. Would definitely hire again.",
        rating: 5,
    },
    {
        name: "Edward E.",
        profession: "Software Engineer",
        comment:
            "Great results and on-time delivery! The process was smooth, and the team was very communicative throughout. Highly appreciated.",
        rating: 5,
    },
];

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i - rating < 1) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <div
            id="testimonials"
            className="max-w-screen-2xl mx-auto p-8 bg-gradient-to-tr from-darkBlue via-violet to-purple text-lightGray pt-24"
        >
            <motion.h2
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl md:text-4xl font-bold text-center mb-8 text-lightGray uppercase">
                What Clients Say
            </motion.h2>
            <Slider {...settings} className="testimonial-slider max-w-[90%] mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-card bg-white text-center rounded-xl p-6 shadow-md flex flex-col items-center"
                        aria-label={`Testimonial from ${testimonial.name}`}
                    >
                        <h3 className="text-xl font-semibold text-accent mb-1">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-black mb-4">
                            {testimonial.profession}
                        </p>
                        <p className="text-sm text-darkGray italic mb-4">
                            "{testimonial.comment}"
                        </p>
                        <div className="flex justify-center gap-1">
                            {renderStars(testimonial.rating)}
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Styles for 3D effect */}
            <style jsx>{`
                .testimonial-slider {
                    perspective: 600px;
                }
                .slick-center .testimonial-card {
                    transform: scale(1) rotateY(0deg);
                    transition: all 0.3s ease-in-out;
                    z-index: 1;
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
                }
                .slick-slide:not(.slick-center) .testimonial-card {
                    transform: scale(0.85) rotateY(-15deg);
                    opacity: 0.7;
                    transition: all 0.3s ease-in-out;
                }
                .slick-dots li button:before {
                    font-size: 12px;
                    color: #fff;
                }
                .slick-dots li.slick-active button:before {
                    color: #fff;
                }
            `}</style>
        </div>
    );
}

export default Testimonials;
