import React from 'react';
import { FaCode, FaPaintBrush, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building responsive and high-performance websites.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    description: 'Creating visually appealing and brand-aligned designs.'
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines.'
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-center mb-4">{service.title}</h2>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
