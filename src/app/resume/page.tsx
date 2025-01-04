// src/app/resume/page.tsx

"use client";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

const Resume = () => {
  return (
    <Layout>
      <Head>
        <title>Resume - Ben Chen</title>
      </Head>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <AnimatedHeading title="Ben Chen" />
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                              {/* Phone Number */}
              <a
                href="tel:+14159480106"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                415-948-0106
              </a>{"  "}
              |{" "}
              {/* Email Address */}
              <a
                href="mailto:2005benchen@gmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                2005benchen@gmail.com 
              </a>
              {" "}|{" "}

              <a
                href="https://www.linkedin.com/in/ben10chen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
                data-aos="fade-right"
              >
                            <FaLinkedin className="inline-block text-lg" /> LinkedIn

              </a>{" "}
              |{" "}
              <a
                href="https://github.com/2005benchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
                data-aos="fade-left"
              >
                <FaGithub className="inline-block text-lg" /> GitHub
                </a>
            </p>
            <div className="mt-6" data-aos="zoom-in">
  <a
    href="/benchen_resume.pdf"
    download
    className="inline-block px-6 py-3 rounded-md transition bg-blue-600 text-white hover:bg-blue-700 
      dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 shadow-md"
    style={{
      backgroundColor: "rgb(37, 99, 235)", // Explicit blue background for light mode
    }}
  >
    Download PDF
  </a>
</div>


          </div>

{/* Education Section */}
<div className="mb-12" data-aos="fade-up">
  <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
    Education
  </h2>
  <div
    className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-gray-300 relative flex flex-col md:flex-row-reverse items-start md:items-center"
    data-aos="fade-right"
  >
    {/* UCLA Logo */}
    <a
      href="https://www.ucla.edu"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 md:mb-0 md:ml-6 flex-shrink-0"
    >
      <img
        src="/ucla-logo.png" // Update with the actual logo file name
        alt="UCLA Logo"
        className="h-12 w-auto"
      />
    </a>

    {/* Education Details */}
    <div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        University of California, Los Angeles (UCLA)
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Expected Graduation in Jun 2026
      </p>
      <p className="mt-2 text-gray-800 dark:text-gray-200">
        Bachelor&apos;s in Computer Science &amp; Linguistics, Los Angeles, CA
      </p>
      <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>
          Relevant Coursework: Data Structures; Algorithms and Complexity; Software Construction;
          Machine Learning; Computational Linguistics; Functional Programming; Computer Security.
        </li>
        <li>
          Awards &amp; Activities: Regents Scholar (top 0.05% of UCLA applicants); ACM Cyber Team; UCLA CTF
          Team
        </li>
      </ul>
    </div>
  </div>
</div>

          {/* Experience Section */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Experience
            </h2>
            {[
              {
                title: "Cybersecurity Engineer Intern (Cloud Systems)",
                company: "Walmart Global Tech",
                duration: "Jun 2024 to Aug 2024",
                location: "Bentonville, AR",
                points: [
                  "Implemented Cloud Security Posture Management (CSPM) solutions on Wiz for Walmart’s PCI cloud environment, ensuring continuous compliance & securing billions of dollars in online payment info & consumer data privacy.",
                  "Programmed eight different custom Cloud Configuration Rules using Rego scripting that continuously runs against Walmart’s PCI cloud architecture, which has generated a total of 933 findings & 105 security issues.",
                  "Enhanced cloud security by delivering weekly system compliance reports & automatic issue detection email notification integration system, increasing PCI compliance security stakeholder awareness.",
                  "Developed Proof-of-Concept to automate 24.4% of all PCI requirements using Wiz, saving thousands of dollars of workhours and improving cloud posture by identifying previously undetected misconfigurations.",
                ],
                walmart: true, // Indicate Walmart Global Tech involvement
              },
              {
                title: "AI Security Shadow",
                company: "Walmart Global Tech",
                duration: "Jun 2024 to Aug 2024",
                location: "Bentonville, AR",
                points: [
                  "Observed the implementation of machine learning models trained on Windows commands datasets to enhance identification and mitigation of internal organizational threats through User Entity & Behavior Analysis (UEBA).",
                  "Studied the specific roles of machine learning models in embedding, dimensionality reduction, outlier detection, & pattern interpretation within an IAM model production pipeline using DevSecOps principles.",
                ],
                walmart: true, // Indicate Walmart Global Tech involvement
              },
              {
                title: "Deep Learning Research Intern",
                company: "The Mobile and Intelligent Computing Laboratory",
                duration: "Jan 2023 to May 2023",
                location: "San Francisco, CA",
                points: [
                  "Established STM32 & ESP32 asynchronous communication by optimizing remote PC-based operations with on-device protocols, boosting transmission efficiency by 30% and eliminated cybersecurity risks.",
                  "Engineered Bluetooth connection between Myo armband and ESP32, implemented UART protocol for data transmissions onto STM32 microcontroller, ensuring a robust data pipeline to finetune on-device CNN models.",
                ],
                sfsu: true, // Indicate San Francisco State involvement
              },
            ].map((job, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-6 mb-6 dark:bg-gray-800 dark:text-gray-300 flex flex-col md:flex-row-reverse items-start md:items-center`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternating fade effect
              >
                {/* Company Logo */}
                {job.walmart && (
                  <a
                    href="https://tech.walmart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 md:mb-0 md:ml-6 flex-shrink-0" // Changed md:mr-6 to md:ml-6
                  >
                    <img
                      src="/walmartglobaltechlogo.png" // Default logo
                      alt="Walmart Global Tech Logo"
                      className="h-8 w-auto dark:hidden"
                    />
                    <img
                      src="/walmartdarkmode.png" // Dark mode logo
                      alt="Walmart Global Tech Logo"
                      className="h-8 w-auto hidden dark:block"
                    />
                  </a>
                )}

                {/* San Francisco State Logo */}
                {job.sfsu && (
                  <a
                    href="https://www.sfsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 md:mb-0 md:ml-6 flex-shrink-0" // Changed md:mr-6 to md:ml-6
                  >
                    <img
                      src="/san-francisco-state-gators-seeklogo.png"
                      alt="San Francisco State University Logo"
                      className="h-12 w-auto"
                    />
                  </a>
                )}

                {/* Job Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {job.company}, {job.location}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">{job.duration}</p>
                  <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Projects
            </h2>
            <div
              className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-gray-300 mb-6"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                GDPR Compliance Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Published Research Paper | UCLA ACM - Cybersecurity Team
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Co-authored a UCLA AI cybersecurity paper utilizing NLP to conduct GDPR compliance
                  assessments on sites.
                </li>
                <li>
                  Developed a Chrome extension that automates plugin file retrieval and analysis using Selenium
                  and Python.
                </li>
                <li>
                  Engineered a DistilBERT-based language model to evaluate privacy policies against GDPR
                  standards, fine-tuned with a specialized dataset for 80.1% accuracy.
                </li>
                <li>
                  Paper published &amp; presented at the 2023 MIT Undergraduate Research Technology Conference.
                </li>
              </ul>
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-gray-300"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                URL Threat Analyzer Website + Chrome Extension
              </h3>
              <p className="text-gray-600 dark:text-gray-400">AI cybersecurity project</p>
              <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Led an AI cybersecurity project that tells if an inputted URL is benign or malicious via a website
                  and extension.
                </li>
                <li>
                  Utilized NLP concepts that assessed URL threat just by parsing the URL without looking at
                  website code.
                </li>
                <li>
                  Harnessed datasets, Word2Vec, NLTK, and Pandas, culminating in a K-Nearest Neighbors model; Used
                  SDLC &amp; CI/CD guidelines to implement Flask that facilitated real-time URL analysis on our website.
                </li>
                <li>
                  Model has 96.77% accuracy in predicting URL threat, empowering &ge;82 users to have greater
                  web security.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Technical Skills
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-gray-300">
              <p>
                <strong>Languages:</strong> Experience in Java, Python, C++, SQL, HTML, CSS, JavaScript, Prolog, Haskell,
                Rego
              </p>
              <p>
                <strong>Developer Tools:</strong> Git, PowerShell, VS Code, Google Colab, Flask, Replit, Pandas, NumPy,
                Linux, Wireshark, Wiz
              </p>
              <p>
                <strong>Certifications:</strong> Google Cybersecurity, AWS Cloud Technical Essentials, Azure Cloud
                Services, Google Cloud Fundamentals, Google Linux &amp; SQL, Google Network Security
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
