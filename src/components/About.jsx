import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"  
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}      
          className="bg-quartiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]" 
      >
        As a dedicated Software Engineer, I am passionate about learning and growing in the technology field with a strong foundation in full-stack development, cloud technologies, and AI-powered systems. Most recently, I interned at Amazon, where I designed and built a scalable simulation orchestration tool for the Last Mile Routing & Planning team—an experience that sharpened my ability to build high-impact, production-ready systems using Java, AWS Lambda, DynamoDB, and internal APIs.
        <br className='sm:block hidden' /> <br className='sm:block hidden' /> 
        Previously, I interned at DLB Associates, where I developed a full-stack automation tool for contract management and contributed to front-end enhancements on the company’s client-facing website. I gained hands-on experience with C#, .NET, Blazor, and Azure AI services, applying cutting-edge automation to real business challenges.
        <br className='sm:block hidden' /> <br className='sm:block hidden' /> 
        Outside of industry roles, I actively pursue technical and product challenges through personal projects. From building AnonymousMessage, a MERN + OpenAI-powered feedback platform with OTP-based authentication, to crafting BitTracker, a real-time crypto tracker with Chart.js and Firebase, my projects reflect a commitment to clean architecture, modern design, and scalable systems.
        <br className='sm:block hidden' /> <br className='sm:block hidden' />
        I bring a strong work ethic, an eye for detail, and a deep curiosity for how things work—from backend services to user-facing interfaces. I thrive in collaborative environments and I’m always looking to push my skills further. I’m excited to take on new challenges, contribute to impactful teams, and build software that drives meaningful change.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")