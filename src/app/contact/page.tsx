"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import SuppressClientErrors from "@/components/SuppressClientErrors";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(1000);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: false, mirror: true });
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      setIsSubmitting(false);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SuppressClientErrors />

      <Head>
        <title>Contact Me - Ben Chen</title>
      </Head>
      <section className="pt-12 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-6">
          {/* Header Section */}

          <header className="contact-header">
            <div
              className="flex flex-col justify-center items-center text-center mx-auto mb-10 max-w-4xl"
              data-aos="fade-up"
            >
              <AnimatedHeading title="Contact Me" />
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Feel free to reach out for opportunities or just a friendly chat!
              </p>
            </div>
          </header>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 dark:bg-gray-800 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {successMessage && (
              <p className="text-center text-green-500 mb-4" data-aos="fade-in">
                {successMessage}
              </p>
            )}
            <div className="mb-6" data-aos="fade-right">
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

            <div className="mb-6" data-aos="fade-left">
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

            <div className="mb-6" data-aos="fade-right">
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
              {/* Conditionally switch between singular and plural */}
              <p
                className="text-sm text-gray-500 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                {charCount} {charCount === 1 ? "character" : "characters"} remaining
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition shadow-md"
              style={{
                backgroundColor: "rgb(37, 99, 235)",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-offset="0"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>


        </div>
      </section>
    </Layout>
  );
};

export default Contact;
