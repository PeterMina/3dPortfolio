import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
      >
        Hi, I'm Peter Mina — a passionate AI Engineer and Full Stack Developer with expertise in building intelligent web applications and cutting-edge AI solutions. With hands-on experience in React.js, Node.js, and advanced AI frameworks like PyTorch and TensorFlow, I specialize in integrating machine learning capabilities into real-world applications.
         Currently working as a Jr. Full Stack Developer at e-SKY.ca,
         I Joined Alex Eagles team where we developed autonomous drone systems achieving 96% accuracy, 
         contributed to pharmaceutical research through deep learning drug interaction predictions,
          and was recognized as a NASA Space Apps 2024 Global Nominee for creating an innovative exoplanet exploration platform.
           I thrive on transforming complex AI concepts into practical solutions that make a meaningful impact.   
              </motion.p>
      <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
