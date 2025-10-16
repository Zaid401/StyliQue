import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, Link as RouterLink } from 'react-router-dom';


function Home() {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            {/* <div className="absolute inset-0 bg-[url('/images/back.jpg')] bg-cover bg-center"></div> */}
            <div className="absolute inset-0 bg-[url('/images/back.jpg')] bg-cover bg-center bg-no-repeat"></div>

            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-start justify-center h-full px-6 sm:px-12 lg:px-24"
            >
                {/* Heading with Typing Effect */}
                <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl leading-tight mb-4">
                    BEAUTY & <br />
                    <ReactTyped
                        strings={['HAIR SALON', 'STYLE EXPERTS', 'BEAUTY HUB']}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </h1>

                {/* Subheading */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-white text-sm sm:text-lg"
                >
                    CHANGE YOUR LOOK WITH OUR TALENTED STYLISTS
                </motion.span>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-6"
                >
                         
                 <RouterLink to="/book">
                
                    <button className="relative inline-flex items-center justify-center px-1 py-1 text-sm sm:text-base font-semibold text-gray-900 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg hover:from-pink-600 hover:to-orange-500 focus:ring-4 focus:ring-pink-300 transition">
                        <span className="bg-white px-6 py-2 rounded-md group-hover:bg-transparent">
                          
                            BOOK NOW

                        </span>
                    </button>
                    </RouterLink>
                </motion.div>
            </motion.div>

        </div>
    );
}

export default Home;










    