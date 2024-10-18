"use client"
import {  useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const [sliderImageLink, setSliderImageLink] = useState("/call-of-duty-mobile-hero-a.jpg")
 
  return (
    <>
    <Navbar/>
    
    <div className="img relative overflow-hidden  object-cover border-gray-800">
            <Image src={sliderImageLink} alt="shoes" width={500} height={500} className="h-screen w-screen border-gray-800 object-cover transition transform duration-500 ease-out hover:scale-105  " />
            
         <div className="w-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-wrap gap-5 absolute bottom-5" >

                <Image onClick={  (e) =>   setSliderImageLink("/call-of-duty-mobile-hero-a.jpg")
                  } src={"/call-of-duty-mobile-hero-a.jpg"} height={100} width={100} alt="card1" className={`w-40 h-24 border-[1px] border-teal-200 rounded-2xl scale-105`}/>

                <Image onClick={ () =>  setSliderImageLink("/blackCell.jpg")
                  } src={"/blackCell.jpg"} height={100} width={100} alt="card1" className={`w-40 h-24 border-[1px] border-teal-200 rounded-2xl scale-105`}/>

                <Image onClick={() => { return setSliderImageLink("/card3.jpg")  }}  src={"/card3.jpg"} height={100} width={100} alt="card1" className={`w-32 h-24 border-[1px] border-teal-200 rounded-2xl scale-105`}/>
            </div>
        </div>   
      </div> 

       <div className="w-screen text-center mt-20">

           <h1 className="text-5xl font-bold">Our Mission</h1>       
           <p className="h-[1px] w-screen bg-gray-300/50 mt-8"></p>
           <p className="text-xl mt-8 px-5">At Activision, we strive to create the most iconic brands in gaming and entertainment. We’re driven by our mission to deliver unrivaled gaming experiences for the world to enjoy, together.  Home to iconic franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive entertainment. Our goal? Delight millions with innovative, fun, and engaging games. With a legacy of success, we're pushing boundaries with cutting-edge technology and inclusive practices. Join us in delivering unforgettable entertainment and seize the chance to level up your career.</p>

           <h1 className="text-5xl font-bold mt-20">Activate Your Future</h1>
           <p className="h-[1px] w-screen bg-gray-300/50 mt-8"></p>
           <p className="text-xl mt-8 px-5">We unite our global player community with epic entertainment, focusing on three core pillars:</p>
           <p className="text-xl mt-8 px-5">People - fostering talent and learning opportunities.</p>
           <p className="text-xl mt-8 px-5">Innovation - consistently pushing to iterate and evolve.</p>
           <p className="text-xl mt-8 px-5">Excellence - delivering high-quality games, consistently year in and year out.</p>
           <p className="text-xl mt-8 px-5">Join us at Activision, where inclusivity thrives, and together we shape the future of entertainment for our players. Explore open roles now!</p>
            <div className="w-screen flex justify-center items-center mt-20">
           <Image src={"/atvi-values.png"} width={500} height={500} alt="ativi-values" className="w-[80%] h-[60%]"/>
              </div>   


              <Link href={"https://www.activision.com/company/diversity-inclusion#values"}> <button className="w-[30%] md:w-[15%] h-16 rounded-3xl  bg-blue-600/60 hover:bg-blue-600 transition-colors duration-150 ease-in-out border-[3px] border-blue-800 font-bold text-xl ">Learn More</button></Link>
       </div>           
    </>
  )
}
