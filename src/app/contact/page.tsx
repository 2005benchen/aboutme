// src/app/contact/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
// Remove the unused import for LinkedInBadge
import SuppressClientErrors from "@/components/SuppressClientErrors";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(1000);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Check the current theme from localStorage
    const currentTheme = (localStorage.getItem("theme") || "light") as "light" | "dark";
    loadLinkedInBadge(currentTheme);
  }, []);

  const loadLinkedInBadge = (theme: "light" | "dark") => {
    const badgeContainer = document.querySelector("#linkedin-badge-container");

    if (badgeContainer) {
      // Clear the badge container
      badgeContainer.innerHTML = "";

      // Create the badge element
      const badgeDiv = document.createElement("div");
      badgeDiv.className = "badge-base LI-profile-badge";
      badgeDiv.setAttribute("data-locale", "en_US");
      badgeDiv.setAttribute("data-size", "large");
      badgeDiv.setAttribute("data-theme", theme);
      badgeDiv.setAttribute("data-type", "HORIZONTAL");
      badgeDiv.setAttribute("data-vanity", "ben10chen");
      badgeDiv.setAttribute("data-version", "v1");

      badgeContainer.appendChild(badgeDiv);

      // Load the LinkedIn badge script
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setCharCount(1000);
      } else {
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <Layout>
      <SuppressClientErrors />

      <Head>
        <title>Contact Me - Ben Chen</title>
      </Head>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <AnimatedHeading title="Contact Me" />
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>

            {/* LinkedIn Badge Container */}
            <div
              id="linkedin-badge-container"
              className="my-6 mx-auto flex justify-center"
            ></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 dark:bg-gray-800 dark:text-gray-300"
          >
            {successMessage && (
              <p className="text-center text-green-500 mb-4">{successMessage}</p>
            )}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setCharCount(1000 - e.target.value.length);
                }}
                maxLength={1000}
                rows={5}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              ></textarea>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {charCount} characters remaining
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
