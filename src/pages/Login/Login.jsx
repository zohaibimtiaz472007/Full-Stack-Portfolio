import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfiguration';

const Login = () => {
  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) {
      return toast.error("Please fill in all fields");      
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/dashboard')
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);      
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome Back
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            onClick={login}
            type="button"
            className="w-full py-2 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
