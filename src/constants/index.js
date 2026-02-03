import python from '../assets/tech/pythonpls.png';
import java from '../assets/tech/java.png';
import sql from '../assets/tech/sql.png';
import psql from '../assets/tech/ppsql.png';
import csharp from '../assets/tech/csharp.png';
import dotnet from '../assets/tech/dotnet.png';
import dlb from '../assets/tech/dlb2.png';
import cn from '../assets/tech/trycn.png';
import amazon from '../assets/company/amazon.png';
import aws from '../assets/tech/aws.png';
import azure from '../assets/tech/azure.png';
import saas from '../assets/tech/saas.png';
import rag from '../assets/tech/rag.png';
import tracker from '../assets/tech/tracker.png';
import chatapp from '../assets/tech/chatapp.png';
import contractdb from '../assets/tech/contractdb.png';

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
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "Full Stack Development",
      icon: mobile,
    },
    {
      title: "AI/Automation",
      icon: creator,
    },
    {
      title: "Web Development",
      icon: backend,
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
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      title: "SDE Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "white",
      date: "May 2025 - Aug 2025",
      points: [
        "Designed and developed a cloud-native simulation orchestration tool using Java, AWS CDK, and REST APIs, enabling the analysis of station-specific delivery routing plans with configurable metrics and date ranges.",
        "Automated simulation tracking, results extraction, and report generation by utilizing AWS Lambda, S3, DynamoDB, and IAM with internal APIs, reducing manual analysis and accelerating decision-making.",
        "Architected and thoroughly tested a scalable and reliable system from the ground up, leveraging clean design patterns and aligning with Amazon’s engineering standards.",      ],
    },
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
      name: "UpBrand",
      description:
        "This project is a full-stack, AI-driven SaaS application that generates brand-aware copy snippets and keywords tailored to customer inputs. It features a scalable Python backend built with FastAPI, deployed serverlessly on AWS Lambda and API Gateway, and integrates advanced language models for intelligent content generation. The frontend is a modern Next.js and React application, styled with Tailwind CSS and deployed on Vercel. The system demonstrates end-to-end SaaS architecture, cloud infrastructure design, and production-ready AI integration.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "black-text-gradient",
        },
      ],
      image: saas,
      source_code_link: "https://github.com/panchalohm",
    },
        {
      name: "DocQuery",
      description:
        "This project is a Retrieval-Augmented Generation (RAG) system that enables intelligent, context-aware question answering over custom documents and datasets. Built with Python, LangChain, and FastAPI, it leverages vector embeddings and a scalable vector database to retrieve relevant context and generate high-quality AI responses. The system supports PDFs and dynamic data updates, includes automated testing for response quality, and runs locally or as a public API. It is deployed on AWS Lambda using Docker and CDK, with a modern static Next.js frontend for seamless interaction.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "VectorDatabase",
          color: "black-text-gradient",
        },
        {
          name: "LangChain",
          color: "pink-text-gradient",
        },
        {
          name: "AWS/Docker",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: rag,
      source_code_link: "https://github.com/panchalohm/DocQuery",
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
      image: chatapp,
      source_code_link: "https://github.com/panchalohm",
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
      image: tracker,
      source_code_link: "https://github.com/panchalohm",
    },
        {
      name: "Contract Database Automation App",
      description:
        "Developed during my internship at DLB Associates, this project involves developing a robust Contract Details Database system. Automating the extraction of text from documents received via email, leveraging Azure Document Intelligence for OCR, and passing a database schema and extracting data using Azure AI to generate SQL queries that populate a database with the extracted contract details. By combining modern web technologies with advanced tools like Azure AI and Document Intelligence, and employing development skills in C#, Blazor, and SQL, this project streamlines the handling of contract data efficiently. - DLB Associates property, no thumbnail allowed.",
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
      image: contractdb,
      source_code_link: "https://www.dlbassociates.com/",
    },
    // {
    //   name: "DoSmart",
    //   description:
    //     "DoSmart is an intuitive to-do list application built with React, Node.js, and PostgreSQL. Designed with user productivity in mind, DoSmart offers a seamless log-in experience, ensuring that each user's tasks are securely stored in a personalized database. Whether you need to add, remove, or edit tasks, DoSmart provides a streamlined interface to manage your daily to-dos efficiently.",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Node.js",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "PostgreSQL",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   // image: tripguide,
    //   // source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };