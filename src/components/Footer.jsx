import React from "react";
import logo from "../assets/images/logo.png";
import pin from "../assets/images/pin.png";
import phone from "../assets/images/phone.png";
import instagram_svg from "../assets/images/instagram_svg.png";
import telegram_svg from "../assets/images/telegram_svg.png";
import facebook_svg from "../assets/images/facebook_svg.png";
import linkedin_svg from "../assets/images/linkedin_svg.png";
import email_svg from "../assets/images/email_svg.png";
const Footer = () => {
    return (
        <>
            <footer className="bg-[#606060] text-white py-10 px-5">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
                    <div className="text-left">
                        <img src={logo} alt="REGex Logo" className="mb-4 w-44 mx-auto md:mx-0 " />
                        <p className="text-[16px] ">
                            Our team is made up of highly dedicated professionals from many technological fields. Our main objective is to bridge the knowledge gap between business and academics via our training services.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[20px] font-bold mb-4 text-left">Quick Links</h3>
                        <ul className="space-y-2 text-[16px] text-left" >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Training Services</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Software Services</a></li>
                            <li><a href="#">Our Placement</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[20px] font-bold mb-4 text-left">What We Offer</h3>
                        <ul className="space-y-2 text-[16px] text-left">
                            <li className='cursor-pointer'>Web Applications</li>
                            <li className='cursor-pointer'>Data Analytics</li>
                            <li className='cursor-pointer'>Digital Marketing</li>
                            <li className='cursor-pointer'>SEO, SEM</li>
                            <li className='cursor-pointer'>Android/iOS Applications</li>
                            <li className='cursor-pointer'>Machine Learning & IoT Products</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-[16px] mt-12 text-left">
                            <li className='cursor-pointer'>Training Services</li>
                            <li className='cursor-pointer'>Competitive Programming</li>
                            <li className='cursor-pointer'>Machine Learning & Deep Learning</li>
                            <li className='cursor-pointer'>Big Data Tools</li>
                            <li className='cursor-pointer'>Cloud Computing (AWS)</li>
                            <li className='cursor-pointer'>Python-Django</li>
                            <li className='cursor-pointer'>App Development with Flutter</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[20px] font-bold text-left">Address</h3>
                        <div className="flex items-start space-x-2 mt-4 ">
                            <img src={pin} className='w-6 h-6 hover:animate-pulse ' alt="Location" />
                            <p className="text-[15px] font-bold text-left mb-4">B-35, 2nd floor next to vasantbahar colony, Gopalpura bypass, Jaipur</p>
                        </div>
                        <div className="flex items-start space-x-2 mb-4">
                            <img src={phone} className='w-5 h-5 hover:animate-pulse' alt="Phone" />
                            <p className="text-[15px] font-bold">+91-9602880219,<br />+91-7852071653</p>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src={email_svg} className='w-5 h-5 hover:animate-pulse cursor-pointer' alt="Email" />
                            <p className="text-[15px] font-bold">info@regexsoftware.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#363636]  border-gray-600  p-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-[16px] text-[#8d8d8d] font-medium">Copyrights © 2025 <a href="https://www.regexsoftware.com/" className="font-bold text-white">REGex Software</a></p>
                <div className="flex space-x-4 mt-4 md:mt-0 ">
                    <a href="https://www.linkedin.com/company/regexsoftware" className="text-white rounded-4xl border-2 p-2  transition-transform duration-300 hover:scale-80"><img src={linkedin_svg} className='w-5 h-5' alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/regexsoftware?igsh=MThmZjcxdHYyaGFwaw==" className="text-white rounded-4xl border-2 p-2 transition-transform duration-200 hover:scale-80"><img src={instagram_svg} className='w-5 h-5' alt="Instagram" /></a>
                    <a href="https://t.me/REGexSoftware" className="text-white rounded-4xl border-2 p-2 transition-transform duration-300 hover:scale-80"><img src={telegram_svg} className='w-5 h-5' alt="Telegram" /></a>
                    <a href="#" className="text-white rounded-4xl border-2 bg-white p-2 transition-transform duration-300 hover:scale-80"><img src={facebook_svg} className='w-5 h-5' alt="Facebook" /></a>
                </div>
            </div>
        </>
    );
};

export default Footer;
