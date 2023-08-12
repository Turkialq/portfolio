import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/login.png";
import rmtdevImg from "@/public/burhan.png";
import wordanalyticsImg from "@/public/Infrastructure-IFM2.jpeg";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Graduated From Imam muhammad ibn saud university, College of Computer and Information Sciences",

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
    title: "Messaging system using Microservices",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Docker", "kubernetes", "NodeJS", "Nats message broker"],
    imageUrl: wordanalyticsImg,
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
