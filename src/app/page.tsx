//./src/app/page.tsx


import React from "react";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center text-gray-800 dark:text-gray-200">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website!</h1>
          {/* Replace "I'm" with I&apos;m */}
          <p className="text-xl">
            I&apos;m Ben Chen, a UCLA student studying cybersecurity.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
