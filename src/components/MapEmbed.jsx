import React from "react";

const MapEmbed = () => {
    return (
        <div className="relative mt-8 w-full h-72 md:h-96 lg:h-[500px] px-4">
            <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2923587671007!2d75.7916601742192!3d26.86245096225097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc961d37854b3%3A0x835ffe73fd8bda3f!2sREGex%20Software!5e0!3m2!1sen!2sin!4v1738583645920!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="REGex Software Location"
            />
        </div>
    );
};

export default MapEmbed;
