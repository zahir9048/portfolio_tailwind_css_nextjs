"use client";
import React from 'react';
// import { Heebo } from "next/font/google";
// import { div } from 'three/webgpu'
import Link from 'next/link'
import Image from "next/image"

// const heebo = Heebo({subsets:['latin']})

const RecentPostCard = () => {
    return(
        <div id='project'>
            <section className='text-black body-font pb-[4rem]'>
                <div className='container px-5 py-15 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-10'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-10 text-black'>
                            My Projects
                        </h1>
                    </div>
                    <div className='flex flex-wrap -m-5 -mt-[5rem]'>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'> 
            <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/image-generator.png" width={100} height={100} />
                
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            Text to Image Generator
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            shooting star
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link href={"https://text-to-image-sigma-rose.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>



            </div>

                        </div>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'>
            <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/quiz-app.png" width={100} height={100}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            Python quiz App
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            Made by me 
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link href={"https://python-quiz-app.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>



            </div>

                        </div>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'>
                        <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/jarvis.png" width={100} height={100}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            My Assisstant Jarvis 
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            shooting star
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link target='_blank' href={"https://my-virtual-assistant.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>



                         </div>

                        </div>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'>
            <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/editable-cv.png" width={100} height={100}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            Editable Resume Builder 
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            Made by me 
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link target='_blank' href={"https://cv-phi-ruby.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>



            </div>

                        </div>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'>
            <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/bg-remover.png" width={100} height={100}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            Image Background Remover 
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            Made by me 
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link target='_blank' href={"https://background-remover-rose.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>

            </div>

                        </div>
                        {/*Projects */}
                        <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer w-[100%]'>
            <div className='flex relative'>
                <Image
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src="/assets/code-editor.png" width={100} height={100}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-x-gray-200 bg-white opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-myPink mb-1'>
                            Code Editor App 
                    </h2>
                    <h1 className='title-font text-lg font-medium text-black mb-3'>
                            Made by me 
                    </h1>
                    <p className='leading-relaxed line-clamp-2'>

                    </p>
                    <Link target='_blank' href={"https://code-editor-gamma-gilt.vercel.app/"}>
                    <p className='leading-relaxed text-myPink hover:underline'>
                            View Project...
                    </p>
                    </Link>
                </div>



            </div>

                        </div>

                    </div>
                </div>

            </section>
        
        </div>


    )
}

export default RecentPostCard
