import React from 'react';
import HeroImage from '../../assets/Hero.jpeg';
import '../../App.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row align-middle justify-between px-8 py-16 lg:px-32 lg:py-24 nav-bg margin-reduce-top">
      <div className="flex flex-col items-start justify-between text-left max-w-xl lg:mb-0 mt-10 mb-4 pb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
          I'm Abubakr Khanooni <span className='text-4xl lg:text-5xl font-bold text-yellow-500 mb-2'>Front-end</span> Developer
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat Feugiat Placera Labortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-600 transition duration-300 flex flex-row align-middle justify-center">
          HIRE ME &nbsp;
          <FaArrowRightLong style={{ height: "1.5rem", width: "1.7rem" }} />
        </button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={HeroImage} alt="Hero" className="w-screen h-max" />
      </div>
      
      {/* SVG Icons */}
      <svg className="absolute top-10 left-10 w-10 h-10"viewBox="0 0 40 24" fill="none">
        <rect x="0.5" y="1.5" width="21" height="19.831" transform="matrix(0.907758 0.419493 -0.459343 0.888259 11.4241 0.187027)" stroke="#0047FF" stroke-opacity="0.8" stroke-width="2" />
      </svg>
      <svg className="absolute bottom-10 right-5 w-6 h-6"viewBox="0 0 24 22" fill="none">
        <path d="M22.7263 11.0857C22.7263 16.4416 18.1164 20.878 12.3097 20.878C6.50311 20.878 1.89319 16.4416 1.89319 11.0857C1.89319 5.72985 6.50311 1.29346 12.3097 1.29346C18.1164 1.29346 22.7263 5.72985 22.7263 11.0857Z" stroke="#05FF00" stroke-opacity="0.8" stroke-width="2" />
      </svg>
      <svg className="absolute top-1/4 left-1/2 w-6 h-6"viewBox="0 0 24 22" fill="none">
        <path d="M22.2274 11.2635C22.2274 16.6194 17.6175 21.0558 11.8108 21.0558C6.00421 21.0558 1.39429 16.6194 1.39429 11.2635C1.39429 5.90759 6.00421 1.47119 11.8108 1.47119C17.6175 1.47119 22.2274 5.90759 22.2274 11.2635Z" stroke="#FFB400" stroke-opacity="0.8" stroke-width="2" />
      </svg>
      <svg className="absolute top-10 right-1/3 w-6 h-6" viewBox="0 0 24 22" fill="none">
        <path d="M22.2211 10.9422C22.2211 16.2981 17.6111 20.7345 11.8045 20.7345C5.99786 20.7345 1.38794 16.2981 1.38794 10.9422C1.38794 5.5863 5.99786 1.1499 11.8045 1.1499C17.6111 1.1499 22.2211 5.5863 22.2211 10.9422Z" stroke="#05FF00" stroke-opacity="0.8" stroke-width="2" />
      </svg>
      
      <svg className="absolute bottom-5 left-1/4 w-6 h-6" viewBox="0 0 24 22" fill="none">
        <path d="M22.2513 11.3773C22.2513 16.7331 17.6414 21.1695 11.8348 21.1695C6.02814 21.1695 1.41821 16.7331 1.41821 11.3773C1.41821 6.02136 6.02814 1.58496 11.8348 1.58496C17.6414 1.58496 22.2513 6.02136 22.2513 11.3773Z" stroke="#FFB400" stroke-opacity="0.8" stroke-width="2" />
      </svg>
      <svg className="absolute top-3/4 right-1/4 w-5 h-5" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2211 10.9422C22.2211 16.2981 17.6111 20.7345 11.8045 20.7345C5.99786 20.7345 1.38794 16.2981 1.38794 10.9422C1.38794 5.5863 5.99786 1.1499 11.8045 1.1499C17.6111 1.1499 22.2211 5.5863 22.2211 10.9422Z" stroke="#05FF00" stroke-opacity="0.8" stroke-width="2"/>
      </svg>
    </section>
  );
  

}

export default Hero;
