"use client"
import Image from "next/image"
import Navbar from "../components/Navbar/Navbar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { title } from "process"


export default function BookYours() {
  // const [image, setImage]= useState("/blackOps/blackops6.png")
  const [activeIndex, setActiveIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);

  const images = [
    "/blackOps/blackops6.png",
    "/blackOps/B06-1.png",
    "/blackOps/BO6_Campaign.png",
    "/blackOps/BO6_MP.png",
    "/blackCell.jpg"]

    type LogoObject = {
      image: string,
      title: string
    }

    const logos: LogoObject[] = [{image:"/xbox-logo.png", title:"XBOX" }, {image:"/windows.png", title:"WINDOWS"}, {image:"/playstation-logotype.png", title:"PLAYSTATION"},{image: "/steam.png", title:"STEAM"}]

  return (
    <>
      <Navbar />
      <div className=" w-screen h-screen mb-20 mt-0 md:mt-5  flex flex-wrap justify-center items-center gap-10">
        {/* MAIN IMAGE AND CAROUSEL , Descriptioins*/}
        <div className="w-[90vw] h-[50vh] md:w-[60%] md:h-[80%] ">
          <Image src={images[activeIndex]} height={500} width={500} alt="bg" className="w-full h-full object-center" />

          <Carousel
            opts={{
              align: "center",
            }}

            className="mx-20 md:mx-0 md:w-full w-1/2 mt-5 "
          >
            <CarouselContent>
              {images.map((image, index) =>

                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <Image onClick={() => {
                    setActiveIndex(index)

                  }} src={image} height={200} width={200} alt="selection" className={`${activeIndex === index ? 'border-4 border-gray-500' : 'border border-gray-300'}`} key={`${image}`}
                  />
                </CarouselItem>
              )}


            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>

        </div>

        <div className="mt-32 w-[70vw] md:w-[25vw]  bg-black  flex flex-col justify-center items-center  border-[1px] border-white shadow-lg shadow-black font-heading">
          {/* Choose your platform Section */}

          <div >
            <Image src={"/BO6_Banner.png"} height={100} width={100} alt="logo" className="w-72 h-16" />
          </div>

          <Tabs defaultValue="account" className="my-5 w-full flex flex-col justify-center items-center">
            <TabsList className="bg-gray-900 hover:bg-gray-800  rounded-none w-[90%] md:w-[80%] h-12 gap-5">
              <TabsTrigger value="Vault" >VAULT EDITION</TabsTrigger>
              <TabsTrigger value="Standard" >STANDARD</TabsTrigger>
            </TabsList>
            <TabsContent value="Vault" className="w-full">
              <div className="w-full px-5 flex flex-col justify-center items-start">
             <h1 className="text-xl font-extrabold">PRE-ORDER</h1>
             <p>Choose your platform:</p>
              </div>

             <div className="w-[392px] px-5 flex flex-wrap gap-5">
              {   logos.map((logo, index) => 
                  <button key={index} onClick={()=> setLogoIndex(index)} className={`bg-gray-500/60 hover:bg-gray-500 ${logoIndex === index ? 'bg-gray-500' : ''}  w-32 h-12 pl-4 rounded-lg flex justify-start items-center gap-2 border-[1px] border-white`}><Image src={logo.image} height={25} width={25} alt="logo"/> {logo.title}</button>
                )
            }

             </div>
            </TabsContent>
            <TabsContent value="Standard" className="w-full">

            <div className="w-full px-5 flex flex-col justify-center items-start">
             <p>Choose your platform:</p>
              </div>
            <div className="w-[392px] px-5 flex flex-wrap gap-5">
              {   logos.map((logo, index) => 
                  <button key={index} onClick={()=> setLogoIndex(index)} className={`bg-gray-500/60 hover:bg-gray-500 ${logoIndex === index ? 'bg-gray-500' : ''}  w-32 h-12 pl-4 rounded-lg flex justify-start items-center gap-2 border-[1px] border-white`}><Image src={logo.image} height={25} width={25} alt="logo"/> {logo.title}</button>
                )
            }

             </div>
            </TabsContent>
          </Tabs>


        </div>

      </div>
    </>
  )
}
