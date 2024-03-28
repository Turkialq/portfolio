"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Detail-Oriented Software Engineer Specializing in Microservices
        Architecture and Cloud-Based Solutions. Demonstrates a Robust Skillset
        in Developing, Testing, and Deploying Scalable and Resilient Software
        Applications. Proficient in Building and Maintaining High-Performance
        Microservices, Optimized for Cloud Environments.
      </p>
    </motion.section>
  );
}
