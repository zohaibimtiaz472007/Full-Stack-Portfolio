import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample Testimonial Data
const testimonials = [
  {
    quote: "This is the best service I've ever used. Highly recommend!",
    author: "Jane Doe",
    position: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "Fantastic experience! The team was professional and responsive.",
    author: "John Smith",
    position: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "Top-notch quality and support. Will definitely use again!",
    author: "Alice Johnson",
    position: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Move to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 2000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative">
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <img 
              src={testimonial.image}
              alt={testimonial.author}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white mx-auto"
            />
            <p className="text-lg mb-4">
              <q>{testimonial.quote}</q>
            </p>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-400">{testimonial.position}</p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
