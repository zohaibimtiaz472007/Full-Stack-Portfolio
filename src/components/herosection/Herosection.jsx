import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import image from './image.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4">
      <div className="flex flex-col items-start justify-center md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome 
        </motion.h2>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          To My Portfolio
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typewriter
            words={['I\'m a Web Developer', 'I\'m Graphic Designer', 'I\'m SEO Expert']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>
        <Link to= {'/contact'}>
        <motion 
          href="#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          >
          Contact Me
        </motion>
        </Link>
      </div>

      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full p-1">
          <img src={image} alt="Zohaib Imtiaz" className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
