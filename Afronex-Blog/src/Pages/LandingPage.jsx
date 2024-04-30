import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import webbanner from './../assets/images/landingim.jpeg';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-pink-400 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src={webbanner}
          alt="Blog Banner"
          className="mb-8 w-full max-h-96 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Welcome to Our Blog
        </h1>
        <p className="text-lg text-gray-200 mb-12">
          Explore insightful articles written by experts in various fields.
        </p>
        <div className="flex justify-center">
          <Link
            to="/register"
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg uppercase transition duration-300"
          >
            Explore Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
