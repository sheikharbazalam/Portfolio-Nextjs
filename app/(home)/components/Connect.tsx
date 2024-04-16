"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Titlename from './Titlename';
export default function Connect() {
    let me ="let's";
  return (
    <section className="py-20">
      <Titlename text='ALL ABOUT ME' className='flex flex-col  items-center justify-center -rotate-6 py-10 '/> 
      <div className="relative z-10 rounded-md shadow-md bg-white dark:bg-zinc-900  p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
          <BackgroundGradient className="  rounded-[22px] max-w-3xl mx-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image 
          src={`/mine1.jpg`}
          alt="profile"
          height="400"
          width="400"
          border-radius="45px"
          className="object-contain items-center justify-center"
        />
      
      
      </BackgroundGradient> 
          </div>
          <div className="md:mr-4">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          I AM SHEIKH
        </p>

        
        <p className="text-md text-neutral-600 dark:text-neutral-400">
        I am Sheikh Arbaz Alam, a dedicated Front End Developer and UI/UX designer, passionate about crafting exceptional digital experiences. With a robust foundation in design principles and extensive front-end development skills, including building modern web applications using React.js and Next.js frameworks, I am committed to delivering intuitive and visually compelling solutions. My journey through internships and training has allowed me to delve deep into user-centered design, refining my skills in user research, information architecture, and interactive prototyping. I firmly believe that thoughtful design has the power to transform user interactions. {me} collaborate to bring your visions to life, combining creativity, functionality, and impact to deliver outstanding front-end solutions.
            </p>
            <br>
            </br>
            <p className="text-md text-neutral-600 dark:text-neutral-400">    Im constantly honing my skills to stay ahead of the curve and
              embrace new technologies and best practices. I believe that great
              design is not just about aesthetics but also about usability,
              accessibility, and performance. I strive to create interfaces that
              not only look amazing but also make the user experience smooth and
              delightful.</p>
              <br></br>
         
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              In my free time, I enjoy exploring the latest design trends,
              experimenting with new libraries and frameworks, and contributing
              to open-source projects. Im inspired by the creativity of the web
              community and am always eager to learn and grow as a developer.
              Whether Im crafting pixel-perfect layouts or optimizing the
              performance of a site, I approach my work with dedication and a
              keen eye for detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
