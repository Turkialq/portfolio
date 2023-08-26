import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/login.png";
import rmtdevImg from "@/public/burhan.png";
import wordanalyticsImg from "@/public/Infrastructure-IFM2.jpeg";
import compiler from "@/public/Compiler.png";
import chat from "@/public/chat.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Graduated From Imam muhammad ibn saud university, College of Computer and Information Sciences",
    location: "@Imam muhammad ibn saud university",
    description: "With Honors, GPA 4.5.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "@Confidential",
    description:
      "While attending the last year of my bachelor's degree, I was working part time at a confidiencial company as a full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "@Confidential",
    description:
      "Part of the backend-Team team where i was resposible for Desiging, Developing and Deploying full stack applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Tadreebi",
    description: `Designed and Developed a platform that connects Saudi Universities with Ministries, Companies and Institutions
      for COOP Training .`,
    tags: [
      "Docker",
      "ReactJS",
      "NodeJS",
      "WebRTC",
      "Prisma",
      "PostgreSQL",
      "Django",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Burhan",
    description: `Developed a data analysis management system that Leveraged functionality like OCR, FULL-TEXT-SEARCH and real
      time video call`,
    tags: [
      "Docker",
      ".NET",
      "ReactJS",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Apache-Tika",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ticketing System using Microservices architecture",
    description:
      "Developed a ticketing system using microservices architecture with buss event driven communication.",
    tags: ["Docker", "kubernetes", "NodeJS", "ReactJS", "Nats message broker"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Custom Compiler",
    description:
      "Developed a Lexical Analysis, Syntax Analysis, Semantic Analysis part of a custom compiler.",
    tags: ["Python", "Django", "Postman"],
    imageUrl: compiler,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Developed a real-time chat application using WebRTC & SSL certificate.",
    tags: ["Docker", "NodeJS", "ReactJS", "WebRTC", "MongoDB"],
    imageUrl: chat,
  },
] as const;

export const skillsData = [
  "Docker",
  "Kubernetes",
  "AWS",
  ".NET",
  "NodeJs",
  "Django",
  "NextJs",
  "ReactJS",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Elasticsearch",
  "Redis",
] as const;
