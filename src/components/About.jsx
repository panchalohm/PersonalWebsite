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
        As a dedicated Software Engineer, I am passionate about learning and growing in the technology field, as well as consistently expanding my skills through coursework and hands on projects. My internship at DLB Associates has provided me with invaluable industry experience, especially in full-stack development, web-development, and AI automation. Also allowing me to deepen my understanding of frameworks like .NET and Blazor and apply this knowledge to real world scenearios.
        <br className='sm:block hidden' /> <br className='sm:block hidden' /> 
        In addition to my industry experience, I have further honed my technical and problem solving skills through personal projects. For example AnonymousMessage, developed using the MERN stack and Next.js, integrates AI and provides advanced user authentication, showcasing a production level application. Another project, BitTracker, utilizes React, APIs, and Chart.js to deliver real-time data tracking, demonstrating dynamic, data driven interfaces. Finally, DoSmart, a task management application built with React, Node.js, and PostgreSQL, highlighting a responsive and efficient web application.
        <br className='sm:block hidden' /> <br className='sm:block hidden' /> 
        My strong work ethic, collaboration skills, and a pursuit of innovative solutions have been key to overcoming obstacles and delivering successful results. I'm eager to continue applying these skills in future opportunities and contributing to impactful projects that drive meaningful change.

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