import { useState } from "react"
import logo from "../assets/logo.png"
import {motion, AnimatePresence } from "framer-motion"


function Nav(){
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <nav className="w-full z-50 flex fixed justify-between shadow-xl backdrop-blur bg-white/10">
                <div className="w-[90%] mx-auto bg-yellow h-16 flex justify-between items-center">
                    <div className="w-2xs h-full flex items-center">
                        <img className="w-44" src={logo} alt="techBoost" />
                    </div>
                    <div className="lg:w-2/4 md:w-3/4 hidden md:block">
                        <ul className="flex justify-evenly text-lg font-sans text-gray-900 font-medium">
                            <li className="cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#hero">Home</a></li>
                            <li className="cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#feature">Features</a></li>
                            <li className="cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#review">Testimonials</a></li>
                            <li className="cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#pricing">Pricing</a></li>
                            <li className="cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#CTA">Contact Us</a></li>
                        </ul>
                    </div>
                    <AnimatePresence>
                    {isOpen && (
                       <motion.div
                       initial={{height: 0, opacity: 0}}
                       animate={{height: "auto", opacity: 1}}
                       exit={{height: 0, opacity: 0}}
                       transition={{duration: 0.3}}
                       className="w-full absolute md:hidden top-full shadow-2xl backdrop-blur-xl bg-white left-0">
                            <ul className="flex flex-col top-[64px] justify-evenly text-lg font-sans text-gray-900 font-medium">
                                <li className="mx-4 my-1 cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#hero">Home</a></li>
                                <li className="mx-4 my-1 cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#feature">Features</a></li>
                                <li className="mx-4 my-1 cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#review">Testimonials</a></li>
                                <li className="mx-4 my-1 cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#pricing">Pricing</a></li>
                                <li className="mx-4 my-1 cursor-pointer p-2 rounded-2xl hover:text-white transition duration-300 ease-in-out hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"><a href="#CTA">Contact Us</a></li>
                            </ul>
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <button type='button' className='md:hidden inline-flex items-center justify-center mx-2.5 w-10 h-10 p-2 rounded-lg bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                            </svg>
                            
                        ) : (
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-4">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6h10" /><path d="M4 12h16" /><path d="M7 12h13" /><path d="M7 18h10" />
                            </svg>
                        )}  
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav