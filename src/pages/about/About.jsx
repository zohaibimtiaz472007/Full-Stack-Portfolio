import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center mx-auto max-w-2xl md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi, I'm Zohaib Imtiaz, a passionate Web Developer, Graphic Designer, and SEO Expert. I create visually stunning and highly functional websites with a focus on modern design and user experience.
          </motion.p>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard Icon={FaHtml5} skill="HTML5" />
            <SkillCard Icon={FaCss3Alt} skill="CSS3" />
            <SkillCard Icon={FaJs} skill="JavaScript" />
            <SkillCard Icon={FaReact} skill="React" />
            <SkillCard Icon={FaNodeJs} skill="Node.js" />
            <SkillCard Icon={IoLogoFirebase} skill="Firebase" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <div className="space-y-6">
            <ExperienceCard
              role="Web Developer"
              company="Fiverr"
              duration="Jan 2024 - Present"
              description="Developed and maintained web applications using React and Node.js. Worked closely with design teams to create user-friendly interfaces."
            />
            <ExperienceCard
              role="Graphic Designer"
              company="Fiverr"
              duration="Jun 2022 - Present"
              description="Designed logos, branding materials, and marketing content. Collaborated with clients to deliver custom design solutions."
            />
          </div>
        </section>

        {/* Education Section */}
        <section>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>
          <div className="space-y-6">
            <EducationCard
              degree="Student of Computer Science"
              institution="GPGC Mansehra"
              duration="2023 - Present"
            />
            <EducationCard
              degree="Diploma in Graphic Design"
              institution="Imran Ali Dina"
              duration="2022 - 2023"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const SkillCard = ({ Icon, skill }) => (
  <motion.div
    className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-32 md:w-40"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-3xl md:text-4xl mb-4 text-blue-500" />
    <p className="text-lg md:text-xl font-medium">{skill}</p>
  </motion.div>
);

const ExperienceCard = ({ role, company, duration, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl md:text-2xl font-semibold mb-2">{role}</h3>
    <p className="text-lg md:text-xl text-blue-500 mb-1">{company}</p>
    <p className="text-gray-400 mb-2">{duration}</p>
    <p className="text-sm md:text-base">{description}</p>
  </motion.div>
);

const EducationCard = ({ degree, institution, duration }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl md:text-2xl font-semibold mb-2">{degree}</h3>
    <p className="text-lg md:text-xl text-blue-500 mb-1">{institution}</p>
    <p className="text-gray-400 text-sm md:text-base">{duration}</p>
  </motion.div>
);

export default About;
