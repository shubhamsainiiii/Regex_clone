import React from "react";
import  location from  "../assets/images/location.png";
import  email  from "../assets/images/email.png";
import  rupee  from "../assets/images/rupee.png";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full md:w-3/4">
        
        {/* Left: Contact Information */}
        <div className="bg-[#1E2A5A] text-white w-full md:w-2/5 p-8 text-center flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

          {[{
            img: location,
            title: "Locate Us",
            text: "Jaipur | Pune | Gurugram | Mumbai",
          }, {
            img: email,
            title: "Mail Us",
            text: "contact@regexsoftware.com",
          }, {
            img: rupee,
            title: "Pay Now",
            text: "Pay Course Fee here",
          }].map((item, index) => (
            <div className="mb-10" key={index}>
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-lg mt-1 text-[#cecece]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-3/5 p-8 bg-[#eeeeee] flex flex-col justify-center">
          <h2 className="text-2xl text-[#242d6f] font-bold mb-8 text-center md:text-left">Get In Touch With Us...</h2>
          <form>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
              {["First Name", "Last Name"].map((label, index) => (
                <div key={index}>
                  <label className="block text-[16px] font-medium text-[#757575]">
                    {label} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
              {["Email", "Phone"].map((label, index) => (
                <div key={index}>
                  <label className="block text-[16px] font-medium text-[#757575]">
                    {label} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input type={label === "Email" ? "email" : "tel"} className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Query <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea rows="7" className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required></textarea>
            </div>

            <div className="md:text-left">
              <button type="submit" className="bg-[#eeeeee] text-[#333333] outline-1 outline-gray-400 text-[16px]  md:w-[20%] p-3 font-semibold hover:bg-gray-300 cursor-pointer focus:outline-none transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
