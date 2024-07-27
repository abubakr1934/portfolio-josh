import React from 'react';
import HeroImage from '../../assets/Hero.jpeg';
import '../../App.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row align-middle justify-between px-8 py-16 lg:px-32 lg:py-24 nav-bg margin-reduce-top">
      <div className="flex flex-col items-start justify-between text-left max-w-xl  lg:mb-0 mt-10 mb-4 pb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
          I'm Abubakr Khanooni <span className='text-4xl lg:text-5xl font-bold text-yellow-500 mb-2'>Front-end</span> Developer
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat Feugiat Placera Labortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-600 transition duration-300 flex flex-row align-middle justify-center">
          HIRE ME &nbsp;
          <FaArrowRightLong style={{height:"1.5rem",width:"1.7rem"}}/>

        </button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={HeroImage} alt="Hero" className="w-screen h-max" />
      </div>
    </section>
  );
}

export default Hero;
