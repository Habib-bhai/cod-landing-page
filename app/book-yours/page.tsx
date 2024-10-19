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


import { useState } from "react"


export default function BookYours() {
  // const [image, setImage]= useState("/blackOps/blackops6.png")
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/blackOps/blackops6.png",
    "/blackOps/B06-1.png",
    "/blackOps/BO6_Campaign.png",
    "/blackOps/BO6_MP.png",
    "/blackCell.jpg"]
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>

        <div className="w-[25vw]  bg-black  flex flex-col justify-center items-center  border-[1px] border-white shadow-lg shadow-black font-heading">
          {/* Choose your platform Section */}

          <div >
            <Image src={"/BO6_Banner.png"} height={100} width={100} alt="logo" className="w-72 h-16" />
          </div>

          <Tabs defaultValue="account" className="w-full flex flex-col justify-center items-center">
            <TabsList className="bg-gray-900 hover:bg-gray-800 flex-wrap rounded-none w-[80%] h-12 gap-5">
              <TabsTrigger value="Vault" >VAULT EDITION</TabsTrigger>
              <TabsTrigger value="Standard" >STANDARD</TabsTrigger>
            </TabsList>
            <TabsContent value="Vault">Make changes to your account here.</TabsContent>
            <TabsContent value="Standard">Change your password here.</TabsContent>
          </Tabs>


        </div>

      </div>
    </>
  )
}
