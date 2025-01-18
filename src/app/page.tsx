// src/app/page.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const arrowRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  
    // Load hero image
    const image = new window.Image();
    image.src = "/ben1.jpeg";
    image.onload = () => setIsLoaded(true);
  
    // Copy the current value of the ref
    const currentSentinel = sentinelRef.current;
  
    // Set up IntersectionObserver for the sentinel
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowArrow(true); // Show the arrow when sentinel is in view
          } else {
            setShowArrow(true); // Hide the arrow when sentinel is out of view
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the sentinel is visible
      }
    );
  
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }
  
    // Cleanup the observer on unmount
    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, []);
  

  return (
    <Layout>
      <Head>
        <title>Home - Ben Chen</title>
        {/* Ensures the page scales properly on all mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Outer background gradient */}
      <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-[#f4f4f9] dark:bg-gray-800 px-6">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/benjamin.jpeg"
              alt="Ben Chen"
              fill
              style={{ objectFit: "cover" }}
              className={`object-cover ${
                !isLoaded ? "animate-pixelate" : "animate-none"
              }`}
              priority
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Hero Text */}
          <div className="absolute bottom-44 left-0 right-0 z-10 text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] dark:text-[#FFFFFF]"
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-offset="0"        // <-- Add this
            >
              This is Ben Chen
            </h1>

            <div className="mt-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#FFFFFF] dark:text-[#FFFFFF] tracking-wider">
                <span
                  className="inline-block"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-offset="0"        // <-- Add this
                >
                  Security Engineer,
                </span>{" "}
                <span
                  className="inline-block"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-offset="0"        // <-- Add this
                >
                  UCLA Student,
                </span>{" "}
                <span
                  className="inline-block"
                  data-aos="fade-right"
                  data-aos-delay="700"
                  data-aos-offset="0"        // <-- Add this
                >
                  Tech Geek,
                </span>{" "}
                <span
                  className="inline-block"
                  data-aos="fade-right"
                  data-aos-delay="900"
                  data-aos-offset="0"        // <-- Add this
                >
                  Everything Nerd.
                </span>
              </p>
            </div>
          </div>
{/* Down Arrow */}
<div
  ref={arrowRef}
  className={`absolute bottom-32 inset-x-0 flex justify-center transition-opacity duration-500 animate-fadeIn ${
    showArrow ? "opacity-100" : "opacity-0"
  }`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-[#FFFFFF] dark:text-[#FFFFFF] animate-bounceSlow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>


        </section>

        {/* Sentinel element for arrow hide/show */}
        <div ref={sentinelRef} className="h-1"></div>

        {/* Professional Summary */}
        <section
          className="container mx-auto py-24 px-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
          data-aos="zoom-out"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#403f3f] dark:text-[#FFFFFF] text-center"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            Professional Summary
          </h2>
          <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed text-[#2d2d2d] dark:text-[#f4f4f9]">
            <span
              className="inline-block"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <li>Ambitious Computer Science Regents Scholar at UCLA (Class of 2026).</li>
            </span>{" "}
            <span
              className="inline-block"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <li>
                Gained experience in Cloud Security Posture Management (CSPM)
                during a Summer 2024 internship at Walmart Global Tech
                (Bentonville, AR).
              </li>
            </span>{" "}
            <span
              className="inline-block"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <li>
                Skilled in cloud security, AI security, compliance frameworks,
                and risk analysis.
              </li>
            </span>{" "}
            <span
              className="inline-block"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <li>
                Incoming Summer 2025 Security Engineer Intern @ Amazon.com
                (Seattle, WA). Always looking for new opportunities.
              </li>
            </span>
          </ul>
        </section>

        {/* Key Skills */}
        <section className="bg-[#BADDFF] dark:bg-[#0D3B66] py-24 px-6">
          <div className="container mx-auto">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-12 text-[#403f3f] dark:text-[#FFFFFF] text-center"
              data-aos="flip-up"
              data-aos-delay="150"
            >
              Key Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {[
                "Cybersecurity",
                "Cloud Security (AWS, Azure, GCP)",
                "Artificial Intelligence (AI)",
                "Python Programming",
                "Adaptibility",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-60 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 75}
                >
                  <p className="text-xl font-medium text-[#403f3f] dark:text-[#FFFFFF]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="container mx-auto py-24 px-6">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-12 text-center text-[#403f3f] dark:text-[#FFFFFF]"
            data-aos="flip-down"
            data-aos-delay="150"
          >
            Highlights
          </h2>
          {/* Using grid-cols-1 for mobile, md:grid-cols-2 for tablets+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title:
                  "Developed 8 custom Cloud Configuration Rules for Walmart’s PCI architecture, identifying over 1,000 security issues.",
                image: "/20250105_153425.jpg",
              },
              {
                title:
                  "Co-authored a GDPR compliance research paper presented at MIT Undergraduate Research Technology Conference.",
                image: "/gdpr.png",
              },
              {
                title:
                  "Led a project to create an AI-powered URL Threat Analyzer, achieving 96.77% accuracy.",
                image: "/newthreat.png",
              },
              {
                title:
                  "Mentored members of UCLA’s Regents Scholar Society and many Computer Science students.",
                image: "/bennie.jpeg",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#BADDFF] dark:bg-gray-800 shadow-lg rounded-lg p-8"
                data-aos="flip-left"
                data-aos-delay={index * 75}
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
                <p className="text-lg text-[#403f3f] dark:text-[#f4f4f9] text-center">
                  {highlight.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#BADDFF] dark:bg-[#0D3B66] py-24 px-6">
          <div className="container mx-auto">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-12 text-[#403f3f] dark:text-[#FFFFFF] text-center"
              data-aos="zoom-out-up"
            >
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
                  className="italic text-[#2d2d2d] dark:text-[#f4f4f9] bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg max-w-3xl mx-auto"
                  data-aos="fade-right"
                  data-aos-delay={index * 75}
                >
                  {testimonial.quote}
                  <span className="block mt-8 text-right text-sm text-[#403f3f] dark:text-[#FFFFFF]">
                    - {testimonial.author}
                  </span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="container mx-auto py-24 px-6">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-12 text-center text-[#403f3f] dark:text-[#FFFFFF]"
            data-aos="zoom-in-down"
          >
            Publications
          </h2>
          <ul className="space-y-12">
            <li
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-12"
              data-aos="zoom-in"
              data-aos-delay={0}
            >
              <a
                href="https://ieeexplore.ieee.org/document/10535005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003366] dark:text-[#BADDFF] hover:underline text-2xl font-semibold"
              >
                How Private Is Your Browsing? Detecting GDPR Violations Through
                Robust NLP and Static Analysis
              </a>
              <p className="text-[#2d2d2d] dark:text-[#f4f4f9] mt-4">
                Published and presented at the MIT Undergraduate Research
                Technology Conference 2023.
              </p>
            </li>
          </ul>
        </section>

        {/* Latest LinkedIn Activity */}
        <section className="bg-[#BADDFF] dark:bg-[#0D3B66] py-12 px-6">
          <section className="container bg-[#BADDFF] dark:bg-[#0D3B66] mx-auto py-12 px-6 relative">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-12 text-center text-[#403f3f] dark:text-[#FFFFFF]"
              data-aos="zoom-in-down"
              data-aos-delay="0"
              >
              Latest LinkedIn Activity
            </h2>
            <div className="flex justify-center items-center relative" data-aos="zoom-in-up"                          data-aos-delay="0"        >
              <iframe
                src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25504736"
                frameBorder="0"
                width="100%"
                height="1650"
                className="relative z-0"
              />
              <div
                className="absolute z-10 bg-[#BADDFF] dark:bg-[#0D3B66]"
                style={{ width: "100vw", height: "52px", bottom: "0", right: "0" }}
              ></div>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default Home;
