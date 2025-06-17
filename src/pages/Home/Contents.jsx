import React from 'react';
import { Link } from 'react-router';

const Contents = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            There is no freedom without language fluency.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-xs  md:text-sm lg:max-w-md">
          Language fluency unlocks true freedom—freedom to express, connect, and grow. Without it, ideas remain trapped, opportunities slip away, and confidence fades. Mastering a language empowers individuals to think clearly, engage meaningfully, and shape their own destiny. In every society, fluency is the key to voice, choice, and liberation.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i.ibb.co/QvkRmGG2/pexels-diva-plavalaguna-6150527.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Talk about your plan</p>
              <p className="text-sm tracking-wide text-gray-300">
               Share your plan in any language to build clarity, confidence, and connection. Expressing ideas freely helps shape your goals and invites support from others.
              </p>
            </div>
          </div>
        </a>
        <a  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i.ibb.co/1f0bhBn3/pexels-enginakyurt-1498273.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Teach your child
              </p>
              <p className="text-sm tracking-wide text-gray-300">
               Teach your child to share their plans in any language. It builds confidence, communication skills, and clear thinking—empowering them to express dreams, solve problems, and connect with others.
              </p>
            </div>
          </div>
        </a>
        <a  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i.ibb.co/d0fz8QMW/pexels-julia-m-cameron-4145153.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Learn from anywhere</p>
              <p className="text-sm tracking-wide text-gray-300">
               Learning can happen anywhere—at home, online, in nature, or through people. Embrace every moment as a chance to grow, explore new ideas, and gain knowledge beyond classroom walls.
              </p>
            </div>
          </div>
        </a>
        <a  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i.ibb.co/JwmHsQtF/pexels-karolina-grabowska-7296382.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Let's start with basics
              </p>
              <p className="text-sm tracking-wide text-gray-300">
               Let’s start from the beginning—build strong foundations, revisit basics, and grow step by step. A fresh start allows clarity, confidence, and steady progress toward your goals with purpose.

              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center">
        <Link
          to={"/no-content"}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          View gallery
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Contents;