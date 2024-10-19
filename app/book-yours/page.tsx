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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"


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

  type ModesNameAndDescription = {
    name: string,
    description: string,
    image: string
  }

  const logos: LogoObject[] = [{
    image: "/xbox-logo.png",
    title: "XBOX"
  },
  {
    image: "/windows.png",
    title: "WINDOWS"
  },
  {
    image: "/playstation-logotype.png",
    title: "PLAYSTATION"
  },
  {
    image: "/steam.png",
    title: "STEAM"
  }]


  const Modes: ModesNameAndDescription[] = [
    {
      name: "CAMPAIGN",
      image: "/blackOps/BO6_Campaign.png",
      description: "The Black Ops 6 Campaign provides dynamic moment-to-moment gameplay that includes a variety of play spaces with blockbuster set pieces and action-packed moments, high-stakes heists, and cloak-and-dagger spy activity."
    },
    {
      name: "MULTIPLAYER",
      image: "/blackOps/BO6_MP.png",
      description: "In Black Ops 6 Multiplayer, players will test their skills across 16 new maps at launch, including 12 core 6v6 maps and 4 Strike maps that can be played 2v2 or 6v6. Additionally, players will see the return of a more traditional Prestige system, bigger and more rewarding than ever."
    },
    {
      name: "ZOMBIES",
      image: "/blackOps/B06-1.png",
      description: "Black Ops 6 also marks the return of Round-Based Zombies, the fan-favorite mode where players will take down hordes of the undead in two brand-new maps at launch. Post-launch, players can look forward to even more exciting maps and groundbreaking experiences dropping into both Multiplayer and Zombies."
    },
  ]

  return (
    <>
      <Navbar />
      <div className=" w-screen relative mb-20 mt-0 md:mt-5  flex flex-wrap-reverse justify-center items-center gap-10">
        {/* MAIN IMAGE AND CAROUSEL , Descriptioins*/}
        <div className="w-[90vw]  md:w-[60%] md:h-[80%] ">
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

          {/* Description Section */}
          <div className="font-heading mt-10">
            <h4 className="text-xl font-bold">CALL OF DUTY</h4>
            <h1 className="mt-2 text-5xl font-extrabold">BLACK OPS 6</h1>
            <p className="my-3 tracking-widest">While the Gulf War commands the global spotlight, a shadowy clandestine force has infiltrated the highest levels of the CIA, branding anyone who resists as traitors. Exiled from their agency and country that once hailed them as heroes, Black Ops veteran Frank Woods and his team find themselves hunted by the military machine that created them.</p>
            <p className="mb-2 tracking-wide text-lg">Game modes include:</p>
            <ul className="list-disc list-inside">
              <li>Campaign</li>
              <li>Multiplayer</li>
              <li>Zombies</li>
            </ul>
            <p className="mt-3 text-lg">Pre-order the Vault Edition now and get access to additional premium content including BlackCell, and more.</p>
          </div>

          {/* Game Modes */}
          <div className="w-full font-heading flex flex-col justify-center items-center mt-5 gap-6">
            <h1 className="my-10 text-start text-5xl font-extrabold w-full">GAME MODES</h1>
            {
              Modes.map((mode, index) => (
                <div key={index} className="flex  md:flex-nowrap flex-wrap  gap-8  justify-center items-center">
                  <Image src={mode.image} height={500} width={500} alt="mode" className="w-96 md:w-80 h-52 text-start" />

                  <div >
                    <h1 className="w-full text-start text-3xl md:text-5xl mb-3 font-extrabold">{mode.name}</h1>
                    <p className="text-sm">{mode.description}</p>
                  </div>
                </div>
              ))
            }

          </div>

          {/* DETAILS */}
          <div>
            <Accordion type="single"  collapsible className="mt-10">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-extrabold font-heading">PRODUCT DETAILS</AccordionTrigger>
                <AccordionContent>
                    <div className="font-heading w-full flex text-start justify-center items-center flex-wrap gap-5"> 
                        <div className="w-full">

                              <div className="w-full text-xl">
                              <span className="text-2xl font-bold">GENRE: </span> Action-Shooter
                              </div>

                              <div className="w-full text-xl">
                              <span className="text-2xl font-bold">PLATFORMS: </span> Windows / Xbox / PlayStation
                              </div>

                              
                          </div>

                        <div>
                            <h1 className="text-2xl font-bold mb-3">AVAILABLE LANGUAGES:</h1>
                            <ul className="list-disc list-inside">
                              <li>English [US]</li>
                              <li>Português [BR]</li>
                              <li>Español [EU]</li>
                              <li>Italiano</li>
                              <li>Русский</li>
                              <li>繁體中文</li>
                              <li>Español [AL]</li>
                              <li>Deutsch</li>
                              <li>Français</li>
                              <li>Polski</li>
                              <li>한국어</li>
                              <li>日本語</li>
                            </ul>
                        </div>
                        <div>
                        <h1 className="text-2xl font-bold mb-1">PRODUCT REQUIREMENTS:</h1>
                            <ul className="list-disc list-inside">
                                <li>Internet Connection, Battle.net® desktop app, Battle.net® account and Activision account required to play.</li>
                                <li>A mobile phone number must be linked to your Battle.net® Account to play Black Ops 6®.</li>
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-extrabold font-heading">XBOX</AccordionTrigger>
                <AccordionContent>
                    <p className="font-heading text-xl">Compatible with Xbox X|S + One</p>
                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl font-extrabold font-heading">PLAYSTATION</AccordionTrigger>
                <AccordionContent>
                    <p className="font-heading text-lg tracking-wider">Compatible with PS5 & PS4</p>
                    <h2 className="font-heading text-xl font-semibold my-4"> BATTLE PASS BUNDLE BONUS</h2>
                    <p className="font-heading text-lg tracking-wider">Unlock new gear and goodies even faster. PlayStation players that purchase a Battle Pass Bundle will get an additional 5 tier skips. That’s a total of 25 tier skips.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-2xl font-extrabold font-heading">SYSTEM REQUIREMENTS</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-center md:flex-nowrap flex-wrap gap-3 items-center font-heading">

                    <div>
                        <div className="w-full">
                        <h1 className="text-xl font-bold ">MINIMUM REQUIREMENTS</h1>
                        <p className="h-[1px] w-full bg-gray-600/60 my-5"></p>
                        </div>

                        <h2 className="text-xl font-bold ">OPERATING SYSTEM</h2>
                        <p className="mb-4 text-lg"> Windows® 10 64 Bit (latest update)</p>

                        <h2 className="text-xl font-bold ">VIDEO</h2>
                        <p className="mb-4 text-lg">NVIDIA® GeForce® GTX 960 / GTX 1650 or AMD™ Radeon RX 470 </p>

                        <h2 className="text-xl font-bold ">STORAGE</h2>
                        <p className="mb-4 text-lg">SSD with 149 GB available space at launch (78 GB if COD HQ and Warzone are already installed)</p>

                        <h2 className="text-xl font-bold ">PROCESSOR</h2>
                        <p className="mb-4 text-lg">Intel Core i5-6600 or AMD Ryzen 5 1400</p>

                        <h2 className="text-xl font-bold ">MEMORY</h2>
                        <p className="mb-4 text-lg">8 GB RAM</p>

                        <h2 className="text-xl font-bold ">INTERNET</h2>
                        <p className="mb-4 text-lg">Broadband Internet connection</p>
                    </div>
                    <div>

                    <div className="w-full">
                        <h1 className="text-xl font-bold ">RECOMMENDED SPECIFICATIONS</h1>
                        <p className="h-[1px] w-full bg-gray-600/60 my-5"></p>
                        </div>

                        <h2 className="text-xl font-bold ">OPERATING SYSTEM</h2>
                        <p className="mb-4 text-lg"> Windows® 10 64 Bit (latest update) or Windows® 11 64 Bit (latest update)</p>

                        <h2 className="text-xl font-bold ">VIDEO</h2>
                        <p className="mb-4 text-lg">NVIDIA® GeForce® GTX 1080Ti / RTX 3060 or AMD™ Radeon RX 6600XT, or Intel® Arc™ A770 </p>

                        <h2 className="text-xl font-bold ">STORAGE</h2>
                        <p className="mb-4 text-lg">SSD with 149 GB available space at launch (78 GB if COD HQ and Warzone are already installed)</p>

                        <h2 className="text-xl font-bold ">PROCESSOR</h2>
                        <p className="mb-4 text-lg">Intel Core i7-6700K or AMD Ryzen 5 1600X </p>

                        <h2 className="text-xl font-bold ">MEMORY</h2>
                        <p className="mb-4 text-lg">16 GB RAM</p>

                        <h2 className="text-xl font-bold ">INTERNET</h2>
                        <p className="mb-4 text-lg">Broadband Internet connection</p>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>


          </div>

        </div>



        <div className="mt-32 w-[70vw] md:w-[25vw]  bg-black  flex flex-col justify-center items-center  border-[1px] border-white shadow-lg shadow-black font-heading   md:relative md:-top-[900px] md:right-5">
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

              <div className="w-[392px] px-5 flex flex-wrap gap-9 md:gap-5">
                {logos.map((logo, index) =>
                  <button key={index} onClick={() => setLogoIndex(index)} className={`bg-gray-500/60 hover:bg-gray-500 ${logoIndex === index ? 'bg-gray-500' : ''}  text-sm w-24 md:w-32 h-12 pl-2 md:pl-3 rounded-lg flex justify-start items-center gap-2 border-[1px] border-white`}><Image src={logo.image} height={20} width={20} alt="logo" /> {logo.title}</button>
                )}
              </div>

            </TabsContent>
            <TabsContent value="Standard" className="w-full">

              <div className="w-full px-5 flex flex-col justify-center items-start">
                <p>Choose your platform:</p>
              </div>
              <div className="w-[392px] px-5 flex flex-wrap gap-5">
                {logos.map((logo, index) =>
                  <button key={index} onClick={() => setLogoIndex(index)} className={`bg-gray-500/60 hover:bg-gray-500 ${logoIndex === index ? 'bg-gray-500' : ''}  w-32 h-12 pl-3 rounded-lg flex justify-start items-center gap-2 border-[1px] border-white`}><Image src={logo.image} height={25} width={25} alt="logo" /> {logo.title}</button>
                )}

              </div>
            </TabsContent>
          </Tabs>


        </div>

      </div>


    </>
  )
}
