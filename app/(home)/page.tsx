import React from 'react';
import food  from "./public/food.png";
import Menubars from './components/Menubars';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Project from './components/Project';
import { Signupform } from './components/Signupform';
import {About} from './components/About';
import Connect from './components/Connect';
import Footerelement from './components/Footerelement';
export default function HomePage() {
  return (
    <div className='min-h-[400vh] bg-black overflow-hidden'>
      <div className=' dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative '>

     
      <div className='max-w-7xl mx-auto p-5 '>
        
        <Menubars/>
        <HeroSection/>
      </div>
      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>

      </div>
      
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20 '>
        
       <Skills/>
       <Project/>
   
      <Connect/>
      
       <Signupform />
       <Footerelement/>
      </div>
      
    </div>
  );
}
