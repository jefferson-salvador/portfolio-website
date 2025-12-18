"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              Hi, I'm{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Jeff!',
                1000,
                'Full Stack Developer',
                1000,
                'Web Developer',
                1000,
                'Software Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            Versatile Full Stack Developer with deep technical expertise in TypeScript, React, Next.js, and Go, building scalable, high-performance solutions.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 to-pink-500 text-white mr-4 hover:bg-slate-20">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">

              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>

            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-70 h-70 sm:w-50 sm:h-50 lg:w-60 lg:h-60 relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
