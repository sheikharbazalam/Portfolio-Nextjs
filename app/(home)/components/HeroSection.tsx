import React from 'react'
import Link from 'next/link';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Titlename from './Titlename';



const i = "I'm";
export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse  lg:gap-0 lg:flex-row items-center justify-between gap-10'>
     <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-/4xl lg:text-7xl font-bold'> Hi, <br/>
        <span className='underline underline-offset-8 decoration-blue-500'> {i} Sheikh, </span> </h1> 
        <p className='md:w-96 text-lg text-gray-300'>a Front End developer living and exploring in the United Kingdom.
Building a modern web application that user love to use.
        </p>
        <Link href={"sheikharbazalam@gmail.com"} className='inline-block group'>
  <Titlename text='Contact Me'/>
            
        </Link>
    </div>
    <div className='relative'>
        <div className='w-72 h-72 space-y-5 -rotate-[30deg] relative'>
            <div className='flex gap-3 -translate-8'>
        <div className='w-32 h-32 rounded-2xl bg-green-500'>

</div> 
<div className='w-32 h-32 rounded-full bg-indigo-500'>
    </div>



            </div>
            <div className='flex gap-3 -translate-x-8'>
        <div className='w-32 h-32 rounded-2xl bg-indigo-500'>

</div> 
<div className='w-32 h-32 rounded-full bg-green-500'>
    </div>



            </div>

            <div className='glow absolute top-[40%]  right-1/2 -z-10'>
              
            </div>

           
    </div>
    <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>

    
    <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
        <p>
Available for Work
        </p>
    </MovingBorderBtn>
    </div>
    </div>
    </div>
  )
}
