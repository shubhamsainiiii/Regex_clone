import React from "react";
import bg from '../assets/images/bg.jpg';

const HeroSection = () => {
    return (
        <div className="flex justify-center items-center h-screen relative md:w-full">
            <div
                className="absolute brightness-80 min-w-screen h-[70%] flex bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <p className="text-white text-4xl md:text-5xl font-bold">Contact Us</p>
            </div>
        </div>
    );
};

export default HeroSection;
