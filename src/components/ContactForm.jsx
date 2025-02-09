import React from "react";

const ContactForm = () => {
    return (
        <div className="w-full md:w-3/5 p-8 bg-[#eeeeee]">
            <h2 className="text-2xl text-[#242d6f] font-bold mb-8">Get In Touch With Us...</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="first-name" className="block text-[16px] font-medium text-[#757575]">
                            Name<span className="ml-1 text-red-500 font-bold">*</span>
                        </label>
                        <input type="text" id="first-name" name="first-name" className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-[16px] font-medium text-[#757575]">Last Name</label>
                        <input type="text" id="last-name" name="last-name" className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                        Query<span className="text-red-500 ml-1 font-bold">*</span>
                    </label>
                    <textarea id="query" name="query" rows="7" className="mt-1 block w-full px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:border-gray-500" required></textarea>
                </div>

                <button type="submit" className="bg-[#eeeeee] outline-1 outline-gray-300 text-[#333333] text-[16px] w-[20%] p-3 font-semibold hover:bg-gray-200 cursor-pointer focus:outline-none">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
