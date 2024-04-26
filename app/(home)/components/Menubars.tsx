import Link from 'next/link';
import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoCodepen } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Menubars() {

    const socials = [{
        link:"https://www.linkedin.com/in/sheikh-arbaz-alam-6b6b46172/",
        label:"Linkedin",
        icon:IoLogoLinkedin
    },
    {
        link:"https://github.com/thespoof-source",
        label:"Github",
        icon:FaGithubSquare
    },
    {
        link:"https://codepen.io/thespoof14",
        label:"Codepen",
        icon:IoLogoCodepen
    },

       

    ]
  return (
    <nav className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-stone-400  '>DRJD</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{
                const Icon = social.icon;
              return <Link href={social.link} key={index} aria-label={social.label}>
<Icon className=' w-5 h-5 hover:scale-125  transition-all'/>
              </Link>
            })}
        </div>
        <div className="  hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" p-5 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" p-5 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" p-5 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="sheikharbazala@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="p-5 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://strath-my.sharepoint.com/:w:/r/personal/sheikh_alam_2022_uni_strath_ac_uk/_layouts/15/doc2.aspx?sourcedoc=%7BC5B04EC6-C846-43D1-BFF9-23D46554D832%7D&file=SheikhArbazAlam_CV%20.docx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1713912054207&wdOrigin=OFFICECOM-WEB.START.REC&cid=97c7340d-db61-4229-99e1-b3bca051cc2f&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=7eca50cb-e8c9-41db-8b22-6d768277b54a"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
