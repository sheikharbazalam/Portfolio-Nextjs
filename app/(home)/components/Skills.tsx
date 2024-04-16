"use client";


import React from 'react';
import Titlename from './Titlename';
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { FaGit, FaJava, FaPython } from "react-icons/fa";
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";

export default function Skills() {
  const skills =[
    {
      text:'ReactJs',
      Icon : RiReactjsFill

    },
    {
      text:'Nextjs',
      Icon : TbBrandNextjs

    },
    {
      text:'Javascript',
      Icon : IoLogoJavascript

    },

     {
      text:'SQL',
      Icon : TbSql

    },
    {
      text:'HTML',
      Icon : FaHtml5

    },
    {
      text:'CSS',
      Icon : IoLogoCss3 

    },
    {
      text:'PYTHON',
      Icon : FaPython

    },
    {
      text:'JAVA',
      Icon : FaJava

    },
    {
      text:'GIT',
      Icon : FaGit

    },


  ]
  return (
    <div className='max-w-5xl mx-auto px-8 '>
<Titlename text='Skills' className='flex flex-col  items-center justify-center -rotate-6'/>
    <HoverEffect items ={skills} />
    </div>
    
  )
}
