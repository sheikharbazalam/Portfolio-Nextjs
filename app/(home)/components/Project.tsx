import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Titlename from './Titlename';
import food from "../public/food.png";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Project() {
    const projects=[
        {
title:'Food Recipe Application(drjdfood)',
tech:[RiReactjsFill,SiTailwindcss, TbBrandNextjs],
link:"https://drjdfood.netlify.app/",
cover:"/food.png",
background:"bg-indigo-500"
        },
        {
            title:'Portfolio Web Application(tailwindcss-website)',
            tech:[RiReactjsFill,SiTailwindcss, TbBrandNextjs],
            link:"   https://talwind-css-website.vercel.app/ ",
            cover:"/tailwind.png",
            background:"bg-indigo-500"
                    },
                    {
                      title:'drjdnews News Web Application',
                      tech:[RiReactjsFill,SiTailwindcss, TbBrandNextjs],
                      link:"   http://localhost:3001/",
                      cover:"/news.png",
                      background:"bg-indigo-500"
                              },
                              {
                                title:'Drawing Application',
                                tech:[RiReactjsFill,SiTailwindcss, TbBrandNextjs],
                                link:"   https://talwind-css-website.vercel.app/ ",
                                cover:"/draw.png",
                                background:"bg-indigo-500"
                                        },
    ]
  return (

    <div className='py-10 p-5 sm:p-0'>
<Titlename text='Projects' className='flex flex-col  items-center justify-center -rotate-6'/>
<div className=' grid grid-col-1 sm:grid-cols-2 pt-20 gap-5'>
{projects.map((project,index)=>{
    return <Link href={project.link} key={index} >
       <div className={cn("p-5 rounded-md", project.background)}>
        <DirectionAwareHover 
        
        imageUrl={project.cover} className='w-full space-y-5  cursor-pointer'>
          <div className='space-y-5'>

         
            <h1 className='text-2xl font-bold'>{project.title}</h1>
            <div className='flex items-centergap-5'>
            {project.tech.map((Icon, index) =>{
              return <Icon className='w-8 h-8 ' key={index}/>
            })}
            </div>
             </div>
            

        </DirectionAwareHover>

       </div>
        </Link>
})}
</div>

      
    </div>
  )
}
