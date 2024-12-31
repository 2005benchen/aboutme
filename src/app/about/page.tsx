// src/app/about/page.tsx
"use client";
import React from "react";
import Head from 'next/head';
import Layout from "@/components/Layout";
import AnimatedHeading from '@/components/AnimatedHeading';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <Head>
        <title>About Me - Ben Chen</title>
      </Head>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
          <AnimatedHeading title="Ben Chen" />
          <p className="text-xl text-gray-700 dark:text-gray-300">CS @ UCLA | Prev. Cyber Intern @ Walmart Tech | Cloud & AI Security</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Los Angeles, California, United States | 702 followers | 500+ connections</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 dark:bg-gray-800 dark:text-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">Professional Summary</h2>
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              Ambitious Regents Scholar at UCLA (Class of 2025) and aspiring cybersecurity professional with experience in
              Cloud Security Posture Management (CSPM), AI security, and compliance engineering. Previous intern at
              Walmart Global Tech and researcher at UCLA's Computer Security & Privacy Laboratory.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-500 dark:text-blue-300">Key Skills</h3>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200">
              <li>Cybersecurity</li>
              <li>Cloud Security (AWS, Azure, GCP)</li>
              <li>Artificial Intelligence (AI)</li>
              <li>Python Programming</li>
              <li>Leadership</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-500 dark:text-blue-300">Highlights</h3>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200">
              <li>
                Developed 8 custom Cloud Configuration Rules for Walmart’s PCI architecture, identifying over 1,000 security
                issues.
              </li>
              <li>
                Co-authored a GDPR compliance research paper presented at MIT Undergraduate Research Technology Conference.
              </li>
              <li>
                Led a project to create an AI-powered URL Threat Analyzer, achieving 96.77% accuracy.
              </li>
              <li>
                Mentored members of UCLA’s Regents Scholar Society and ACM Cyber Committee.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">Testimonials</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300">
              <blockquote className="italic text-gray-800 dark:text-gray-200">
                "Ben possesses the skills for cybersecurity or any research role that demands creative problem-solving abilities and a dedication to making a positive societal impact... Ben's collaborative nature and well-rounded perspective make him a valuable asset. Even at this early stage in his career, he has demonstrated a research-oriented mindset and skills that could significantly contribute to any team focused on advancing cybersecurity and safeguarding individual rights." 
                <span className="block mt-2 text-right text-sm text-gray-500 dark:text-gray-400">- Jimmy Lu, Machine Learning Researcher at UC Santa Cruz</span>
              </blockquote>
              <blockquote className="italic text-gray-800 dark:text-gray-200">
                "I wholeheartedly and enthusiastically recommend Ben for any technology-related internship or cybersecurity
                full-time role. His blend of technical expertise, visionary leadership, and commitment to mentoring make him
                an ideal candidate for any position in this field."
                <span className="block mt-2 text-right text-sm text-gray-500 dark:text-gray-400">- Tommy Yu, Deep Learning Research Assistant at SF State University</span>
              </blockquote>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">Publications</h2>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200">
              <li>
                <a
                  href="https://ieeexplore.ieee.org/document/10535005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline dark:text-blue-300"
                >
                <strong>How Private Is Your Browsing? Detecting GDPR Violations Through Robust NLP and Static Analysis</strong>
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Published and presented at the MIT Undergraduate Research Technology Conference 2023.
                </p>
              </li>
            </ul>
          </div>

          {/* <div className="mt-12 text-center">              
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ben10chen" data-version="v1">
              <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ben10chen?trk=profile-badge"></a>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
