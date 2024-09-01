import python from '../assets/tech/pythonpls.png';
import java from '../assets/tech/java.png';
import sql from '../assets/tech/sql.png';
import psql from '../assets/tech/ppsql.png';
import csharp from '../assets/tech/csharp.png';
import dotnet from '../assets/tech/dotnet.png';
import dlb from '../assets/tech/dlb2.png';
import cn from '../assets/tech/trycn.png';
import cpath from '../assets/tech/codepath.png';

import { //Content of different sections.
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Development",
      icon: mobile,
    },
    {
      title: "Web Development",
      icon: backend,
    },
    {
      title: "AI/Automation",
      icon: creator,
    },
    {
      title: "Database Management",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Dotnet",
      icon: dotnet,
    },
    {
      name: "Csharp",
      icon: csharp,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "PSQL",
      icon: psql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "DLB Associates",
      icon: dlb,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Developed web applications using Blazor, .NET, and Azure Services.",
        "Worked closely with the contract team to gather requirements, align on project goals, and deliver solutions that met business needs.",
        "Created a Contract Details Database application to automate the process of gathering information of a contract using various cutting edge technologies.",
        "Implemented new features and fixed bugs on company website for a responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "CodePath",
      company_name: "",
      icon: cpath,
      iconBg: "#383E56",
      date: "Current",
      points: [
        "Engaged in hands-on practice with algorithms, data structures, and problem-solving techniques, improving technical interview skills.",
        "Received mentorship from industry professionals and participated in advanced information sessions from senior engineers.",
        "Developed expertise in Big O notation, recursion, dynamic programming, and more complex data structures.",      ],
    },
    {
      title: "Technology Tutor",
      company_name: "Code Ninjas",
      icon: cn,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - May 2024",
      points: [
        "Taught students aged 7-14 the fundamentals of coding with JavaScript and game development using C# and Unity, fostering problem solving and debugging skills.",
        "Assisted in problem-solving and debugging, creating a hands-on learning environment.",
        "Guided students in building a strong programming foundation and logical thinking skills by explaining complex topics and applying them through a project based approach.",
      ],
    },
  ];
  //REMOVE TESTIMONIALLLLLLSSSSS
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Contract Database Automation App",
      description:
        "Developed during my internship at DLB Associates, this project involves developing a robust Contract Details Database system. Automating the extraction of text from documents received via email, leveraging Azure Document Intelligence for OCR, and passing a database schema and extracting data using Azure AI to generate SQL queries that populate a database with the extracted contract details. By combining modern web technologies with advanced tools like Azure AI and Document Intelligence, and employing development skills in C#, Blazor, and SQL, this project streamlines the handling of contract data efficiently.",
      tags: [
        {
          name: "Blazor",
          color: "blue-text-gradient",
        },
        {
          name: "(C#)",
          color: "green-text-gradient",
        },
        {
          name: "AzureAI",
          color: "black-text-gradient",
        },
        {
          name: ".NET",
          color: "orange-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
    },
    {
      name: "AnonymousMessage",
      description:
        "AnonymousMessage is a production-level application built with the MERN stack and Next.js, featuring advanced AI integration. The app ensures secure user authentication and verification through OTP, using Resend.js and Auth.js. With a user friendly UI, AnonymousMessage offers a seamless and scalable experience for anonymous communication/feedback. The app includes robust security to protect user data, real-time message delivery, and a responsive design that adapts to various devices, ensuring accessibility and privacy for all users.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "orange-text-gradient",
        },
        {
          name: "Auth.js",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      // source_code_link: "https://github.com/",
    },
    {
      name: "BitTracker",
      description:
        "BitTracker is a fully responsive cryptocurrency tracker app built with React JS, Material UI, and Chart JS. It leverages the Context API for efficient state management and integrates the CoinGecko API for real-time backend data. The app features Firebase version 9 with Email and Google authentication, along with a Firestore Database that supports full CRUD operations. Additionally, BitTracker includes secure configuration of Firestore Database rules, providing a comprehensive learning experience in modern web development.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Chart.js",
          color: "pink-text-gradient",
        },
      ],
      // image: jobit,
      // source_code_link: "https://github.com/",
    },
    {
      name: "DoSmart",
      description:
        "DoSmart is an intuitive to-do list application built with React, Node.js, and PostgreSQL. Designed with user productivity in mind, DoSmart offers a seamless log-in experience, ensuring that each user's tasks are securely stored in a personalized database. Whether you need to add, remove, or edit tasks, DoSmart provides a streamlined interface to manage your daily to-dos efficiently.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };