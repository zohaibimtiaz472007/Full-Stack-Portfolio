import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s9xu0j5", "template_ydddajm", form.current, "rq1p1c-7rQjgGTzzv")
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center p-4">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          <motion.button
            value={"Send"}
            type="submit"
            className="w-full py-2 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      <div className="mt-8 text-center">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          You can also reach me on:
        </motion.p>
        <div className="flex justify-center mt-4 space-x-6">
          <motion.a
            href="https://www.facebook.com/zohaib.imtiaz.3994"
            className="text-blue-400 hover:text-blue-600"
            target="blank"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaFacebook size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            className="text-blue-700 hover:text-blue-900"
            target="blank"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://github.com/zohaibimtiaz472007"
            target="blank"
            className="text-gray-400 hover:text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaGithub size={30} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
