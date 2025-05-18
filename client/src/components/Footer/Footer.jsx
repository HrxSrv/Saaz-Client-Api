import React from "react";
import { 
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLocationArrow, 
    FaMobileAlt, 
    FaEnvelope,
    FaFileAlt 
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currLocation = location.pathname === '/';

    return (
        <footer className="w-full bg-[#181818] mt-10" style={{ zIndex: 20000 }}>
            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-8">
                    <div className="flex flex-row flex-wrap justify-between items-start gap-4">
                        {/* Contact Information */}
                        <div className="flex-shrink-0 max-w-[175px] md:max-w-[300px]">
                            <h3 className="text-xl text-gray-300 mb-5">
                                Contact
                            </h3>
                            <div className="space-y-4">
                                <a 
                                    href="https://www.google.com/maps/place/IIITDM+Jabalpur"
                                    className="flex items-start gap-3 text-gray-300 hover:text-gray-100 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLocationArrow className="mt-1 text-sm flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-light">
                                        Indian Institute of Information Technology Design &
                                        Manufacturing Jabalpur Dumna Airport Road, Dumna - 482005
                                    </span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaMobileAlt className="text-sm flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-light">Phone: 6260595371</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaEnvelope className="text-sm flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-light">Email: saaz@iiitdmj.ac.in</span>
                                </div>
                            </div>
                        </div>

                        {/* Social and Annual Report Section */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.youtube.com/@saaziiitdmj8882"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
                                >
                                    <FaYoutube className="text-black" size={14} />
                                </a>
                                <a 
                                    href="https://www.facebook.com/saazIIITDMJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
                                >
                                    <FaFacebookF className="text-black" size={14} />
                                </a>
                                <a 
                                    href="https://www.instagram.com/saaz_iiitdmj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
                                >
                                    <FaInstagram className="text-black" size={14} />
                                </a>
                            </div>

                            {/* Annual Report */}
                            <div>
                                <h3 className="text-xl text-gray-300 mb-3">Annual Report</h3>
                                <a 
                                    href="https://drive.google.com/file/d/1gj1SWNawo3kDw-niQQ23piu4letZq-qx/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors"
                                >
                                    <FaFileAlt className="text-sm flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-light">
                                        View Annual Report
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 py-4">
                    <div className="flex flex-row flex-wrap justify-center md:justify-between items-center gap-4 text-gray-300">
                        <span className="text-xs md:text-sm font-light">
                            Designed By{" "}
                            <a 
                                href="https://www.linkedin.com/in/vishrut-sagar-75b598272/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Vishrut Sagar
                            </a>
                        </span>
                        <span className="text-xs md:text-sm font-light">
                            Coded By{" "}
                            <a 
                                href="https://www.linkedin.com/in/harshitsrv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Harshit Srivastava
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;