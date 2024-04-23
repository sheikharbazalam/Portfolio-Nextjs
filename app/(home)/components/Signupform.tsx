"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Titlename from "./Titlename";

let Me = "Let's";
export function Signupform() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (

    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
        <Titlename text='Contact' className='flex flex-col  items-center justify-center -rotate-6 py-10'/>

        <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, {Me} talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I will get back to you as soon as I can.
              </p>
            </header>
   
      <div className=" order-first flex flex-col gap-10 items-center justify-center"> 
      <form  method="POST"
          action="https://getform.io/f/c95e71cc-1676-4499-b192-1a041e74c299" className="my-8" >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input className=" " id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="drjd@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
                id="message"
                name="message" // Unique name attribute for the message input
                placeholder="Enter your message"
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px]"
              ></textarea>
            
        </LabelInputContainer>
       

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit&rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" >

        
        </div>
      </form>
  
      <div className="  order-second  lg:order-none md:ml-4 ">
      <header className="">
              <h1 className="pt-10 text-gray-50 font-semibold text-md">
              For inquiries about my
              work, projects, or to discuss opportunities in the realm of UI/UX
              design and front-end development, feel free to reach out.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
              Drop your comments,
              questions, or collaboration ideas, and I appreciate you taking the
              time to explore my profile!
              </p>
            
            </header>
           
            <div className=" md:order-n icons-container inline-flex flex-col my-10">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                
                <p className="text-gray-50 font-light text-sm">
                <p className="text-gray-50 font-light text-sm">
                <p>
              <span className="font-semibold">
                {" "}
                Do I have your attention? Hit me up :)
              </span>{" "}
              <br />
              Submit the form or shoot me an email - sheikharbazalam@gmail.com.
            </p>
                </p>
                  +44 7901188851
                </p>
              </div>
             
              </div>
              </div>
              
              </div>
      

      </div>
   
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
