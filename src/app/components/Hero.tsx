"use client"
import React from "react"
import Typewriter from "typewriter-effect"
import Image from "next/image"
import { Heebo } from "next/font/google"
// import Link from "next/link"

const heebo = Heebo({subsets:['latin']})

const Hero = () => {
    return(
        <div className="my-[66px] p-6 mx-auto w-[92%] md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-[521px] h-[305px] flex flex-col md:justify-between items-start justify-evenly">
                <h1 className={`${heebo.className} text-[27px]  md:text-[48px] font-black text-myBlack`}>Hi, I am  <br/>
                  
                   {/* <br className="hidden lg:inline-block"/> */}
                   <Typewriter
                    options={{
                        strings:["Maheen Arif","A Creative Technologist","Web developer","Agentic AI Engineer"],
                        autoStart:true,
                        loop:true,
                    }}
                   />
                </h1>
                <div className="w-[100px] h-[2px] bg-myPink">

                </div>
                    <p className={`${heebo.className} text-myBlack text-[16px] font-normal pb-7`}>
                    I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, TypeScript, TailwindCSS, React, Next.js, and Python. Currently, I am exploring the realms of Agentic AI and Robotics Engineering to broaden my skillset and embrace the future of technology. 

                    </p>
                    
                    <a target="_blank" href="/assets/resume.pdf">
                        <button className={`${heebo.className} w-[205px] h-[50px] bg-myPink text-white text-[18px] font-medium rounded-sm shadow-md shadow-black/60 `}>Download Resume </button>
                    </a>    
                    
            </div>
            <div className="w-[292px] h-[299px] relative rounded-full overflow-hidden">
                 <Image className="z-50" src={"/assets/realistic.webp"}  alt='hero-image' width={292} height={299} />
                 <div className="bg-heroElispe w-[292px] h-[299px] -z-10 rounded-full absolute top-2 right-2"/>
            <div>
                
            </div>
            </div>
        </div>

    )
}

export default Hero