// src/app/about/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Whether animation should happen only once
      mirror: true,
    });

    // Remove pixelate effect after image is loaded
    const image = new window.Image(); // Use the browser's native Image API
    image.src = "/ben1.jpeg"; // Ensure this path is correct
    image.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>About Me - Ben Chen</title>
      </Head>

      <section
  className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-darkBlue dark:to-black px-6"
  // data-aos="fade-up"
>
  {/* Full-Screen Hero Image */}
  <div className="absolute inset-0">
    <Image
      src="/benjamin.jpeg" // Ensure this image exists in the /public directory
      alt="Ben Chen"
      fill
      style={{ objectFit: "cover" }}
      className={`object-cover ${!isLoaded ? "animate-pixelate" : "animate-none"}`}
      priority
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>
{/* Content Overlay */}
<div className="absolute bottom-44 left-0 right-0 z-10 text-center">
  <h1
    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
    data-aos="fade-left"
  >
    This is Ben Chen
  </h1>

  <div className="mt-4">
    {/* Staggered fade-in animations for each line */}
    <p className="text-2xl md:text-3xl lg:text-4xl text-white tracking-wider">
      {/* Each phrase is wrapped in a span with staggered animations */}
      <span
        className="inline-block"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        Security Engineer,
      </span>{" "}
      <span
        className="inline-block"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        UCLA Student,
      </span>{" "}
      <span
        className="inline-block"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        Tech Geek,
      </span>{" "}
      <span
        className="inline-block"
        data-aos="fade-right"
        data-aos-delay="2000"
      >
        Everything Nerd.
      </span>
    </p>
  </div>
</div>

</section>


      {/* Professional Summary */}
      <section
        className="container mx-auto py-24 px-6"
        data-aos="fade-up"
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary dark:text-secondary">
            Professional Summary
          </h2>
          <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            Ambitious Regents Scholar at UCLA (Class of 2026) and aspiring cybersecurity professional with experience in
            Cloud Security Posture Management (CSPM), AI security, and compliance engineering. Previous intern at
            Walmart Global Tech and researcher at UCLA&apos;s Computer Security &amp; Privacy Laboratory.
          </p>
        </div>
      </section>

      {/* Key Skills */}
      <section
        className="bg-secondary dark:bg-darkBlue py-24 px-6"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-primary dark:text-secondary">
            Key Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              "Cybersecurity",
              "Cloud Security (AWS, Azure, GCP)",
              "Artificial Intelligence (AI)",
              "Python Programming",
              "Leadership",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-60 text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <p className="text-xl font-medium text-primary dark:text-secondary">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="container mx-auto py-24 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-primary dark:text-secondary">
          Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              title:
                "Developed 8 custom Cloud Configuration Rules for Walmart’s PCI architecture, identifying over 1,000 security issues.",
              image: "/ben2.jpeg",
            },
            {
              title:
                "Co-authored a GDPR compliance research paper presented at MIT Undergraduate Research Technology Conference.",
              image: "/ben3.jpeg",
            },
            {
              title:
                "Led a project to create an AI-powered URL Threat Analyzer, achieving 96.77% accuracy.",
              image: "/ben4.jpg",
            },
            {
              title:
                "Mentored members of UCLA’s Regents Scholar Society and ACM Cyber Committee.",
              image: "/ben5.jpg",
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
              data-aos="flip-left"
              data-aos-delay={index * 200}
            >
              <div className="relative w-64 h-64 mb-6">
                <Image
                  src={highlight.image}
                  alt={`Highlight ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-200 text-center">
                {highlight.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-secondary dark:bg-darkBlue py-24 px-6"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-primary dark:text-secondary">
            Testimonials
          </h2>
          <div className="space-y-16">
            {[
              {
                quote:
                  "“Ben possesses the skills for cybersecurity or any research role that demands creative problem-solving abilities and a dedication to making a positive societal impact... Ben's collaborative nature and well-rounded perspective make him a valuable asset. Even at this early stage in his career, he has demonstrated a research-oriented mindset and skills that could significantly contribute to any team focused on advancing cybersecurity and safeguarding individual rights.”",
                author: "Jimmy Lu, Machine Learning Researcher at UC Santa Cruz",
              },
              {
                quote:
                  "“I wholeheartedly and enthusiastically recommend Ben for any technology-related internship or cybersecurity full-time role. His blend of technical expertise, visionary leadership, and commitment to mentoring make him an ideal candidate for any position in this field.”",
                author: "Tommy Yu, Deep Learning Research Assistant at SF State University",
              },
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="italic text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg max-w-3xl mx-auto"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                {testimonial.quote}
                <span className="block mt-8 text-right text-sm text-primary dark:text-secondary">
                  - {testimonial.author}
                </span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section
        className="container mx-auto py-24 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-primary dark:text-secondary">
          Publications
        </h2>
        <ul className="space-y-12">
          <li
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-12"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <a
              href="https://ieeexplore.ieee.org/document/10535005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-2xl font-semibold"
            >
              How Private Is Your Browsing? Detecting GDPR Violations Through Robust NLP and Static Analysis
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Published and presented at the MIT Undergraduate Research Technology Conference 2023.
            </p>
          </li>
          {/* Add more publications as needed */}
        </ul>
      </section>

      {/* Additional Space */}
      <div className="py-24"></div>
    </Layout>
  );
};

export default About;
