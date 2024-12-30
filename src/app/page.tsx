"use client";

import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center text-gray-800 dark:text-gray-200">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website!</h1>
          <p className="text-xl">I'm Ben Chen, a UCLA student studying cybersecurity.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
