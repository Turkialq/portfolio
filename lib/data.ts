import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/login.png";
import rmtdevImg from "@/public/burhan.png";
import wordanalyticsImg from "@/public/Infrastructure-IFM2.jpeg";
import devops from "@/public/devops.jpeg";
import chat from "@/public/chat.jpeg";

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
    title: "Full-Stack Developer",
    location: "@Confidential",
    description:
      "While attending the last year of my bachelor's degree, I was working part time at a confidiencial company as a full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title:
      "Graduated From Imam muhammad ibn saud university, College of Computer and Information Sciences",
    location: "@Imam muhammad ibn saud university",
    description: "With Honors, GPA 4.5.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Software Engineer",
    location: "@Confidential",
    description:
      "Part of the backend-Team team where i was resposible for Desiging, Developing and Deploying full stack applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Data-Analysis-Platform",
    description: `Developed a data analysis management system that Leveraged functionality like OCR, full tex-search and complex file operations.`,
    tags: [
      "Docker & Kubernetes",
      ".NET",
      "ReactJS",
      "MongoDB",
      "Elasticsearch",
      "Redis",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Communication System",
    description:
      "Lead the development of a feature-rich communication system, encompassing instant messaging capabilities ,VOIP and End to End Encryption.",
    tags: ["Docker", "Kafka", "NodeJS", "ReactJS", "WebRTC", "MongoDB"],
    imageUrl: chat,
  },
  {
    title: "Devops Pipeline",
    description:
      "Designed & Implemented state of the art Devops pipeline to streamline the progression of software projects.",
    tags: [
      "Docker & Kubernetes",
      "Jenkins",
      "AWS",
      "Github",
      "Terraform",
      "SonarQube",
    ],
    imageUrl: devops,
  },
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
    title: "Ticketing System using Microservices architecture",
    description:
      "Developed a ticketing system using microservices architecture with buss event driven communication.",
    tags: ["Docker & Kubernetes", "NodeJS", "ReactJS", "Nats message broker"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Docker",
  "Kubernetes",
  "AWS",
  ".NET",
  "C#",
  "Java",
  "Python",
  "Django",
  "NodeJs",
  "ReactJS",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Elasticsearch",
  "Kafka",
  "Redis",
] as const;
