import python from '../assets/tech/pythonpls.png';
import java from '../assets/tech/java.png';
import sql from '../assets/tech/sql.png';
import psql from '../assets/tech/ppsql.png';
import csharp from '../assets/tech/csharp.png';
import dotnet from '../assets/tech/dotnet.png';
import c from '../assets/tech/c.png';

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
      title: "Full Stack",
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
  ];
  
  const technologies = [
    {
      name: "Dotnet",
      icon: dotnet,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "PSQL",
      icon: psql,
    },
    {
      name: "Csharp",
      icon: csharp,
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
    {//could replace if needed
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
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "DLB Associates",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Developing web applications using Blazor, .NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Contract Database Automation",
      description:
        "Developed during my internship at DLB Associates, this project involves building a robust Contract Details Database system. The system automates the extraction of text from documents received via email, leverages Azure Document Intelligence for OCR, and passes a database schema and extracted data using Azure AI to generate SQL queries that populate a database with the extracted contract details. By combining modern web technologies with advanced tools like Azure AI and Document Intelligence, and employing development skills in C#, Blazor, and SQL, this project streamlines the handling of contract data efficiently.",
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
          color: "pink-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
    },
    {
      name: "SachAI",
      description:
        "Production level application ",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Bit Track",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "AirCode.io",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "DoSmart",
      description:
        "DoSmart is an intuitive to-do list application built with React, Node.js, and PostgreSQL. Designed with user productivity in mind, DoSmart offers seamless user authentication, ensuring that each user's tasks are securely stored in a personalized database. Whether you need to add, remove, or edit tasks, DoSmart provides a streamlined interface to manage your daily to-dos efficiently.",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };