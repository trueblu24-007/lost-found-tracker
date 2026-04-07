import React from 'react';

export default function Home({ scrollTo }) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-110 -z-10"
        style={{
          backgroundImage: 'url("https://assets.collegedunia.com/public/college_data/images/campusimage/1732967151maxresdefault.jpg")'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          🔍 Lost & Found Tracker
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8">
          Report and track lost or found items at VIT
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('tracker')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition"
          >
            🚀 Get Started
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-3 rounded-lg transition"
          >
            💬 Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
