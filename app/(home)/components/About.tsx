"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Titlename from './Titlename';

export function About() {
  return (
    <div className=" flex flex-col  items justify-center"> 
      <Titlename text='ALL ABOUT ME' className='flex flex-col  items-center justify-center -rotate-6 py-10 '/>
    
    

      <BackgroundGradient className="  rounded-[22px] max-w-3xl mx-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image 
          src={`/mine1.jpg`}
          alt="profile"
          height="400"
          width="400"
          border-radius="45px"
          className="object-contain items-center justify-center"
        />
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          I AM SHEIKH
        </p>

        
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
              I am Sheikh Arbaz Alam, a passionate Front End Developer and UI/UX
              designer with a strong foundation in design principles and a
              commitment to delivering exceptional digital experiences.
              Throughout my internships and training experiences, I have the
              opportunity to immerse myself in the world of user-centered
              design, honing my skills in user research, information
              architecture, and interactive prototyping. I believe that
              thoughtful design has the power to transform user interactions,
              and I am dedicated to creating intuitive and visually compelling
              solutions. Lets collaborate to bring your visions to life with
              creativity, functionality, and impact.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              In my free time, I enjoy exploring the latest design trends,
              experimenting with new libraries and frameworks, and contributing
              to open-source projects. Im inspired by the creativity of the web
              community and am always eager to learn and grow as a developer.
              Whether Im crafting pixel-perfect layouts or optimizing the
              performance of a site, I approach my work with dedication and a
              keen eye for detail.
            </p>
      
      </BackgroundGradient>
      
     
   
    </div>
  );
}
