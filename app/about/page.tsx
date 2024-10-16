"use client"
import { use, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
export default function Page() {
    const [sliderImageLink, setSliderImageLink] = useState("/call-of-duty-mobile-hero-a.jpg")

    const [scale, setScale] = useState(100);

    function handleScale() {
        if (scale === 1) {
            setScale(150);
        } else {
            setScale(1);
        }
    }
  return (
    <>
    <Navbar/>
    
    <div className="img relative overflow-hidden rounded-2xl object-cover border-gray-800">
            <Image src={sliderImageLink} alt="shoes" width={500} height={500} className="h-screen w-screen border-gray-800 object-cover transition transform duration-500 ease-out hover:scale-105  " />
            
         <div className="w-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-wrap gap-5 absolute bottom-5" >

                <Image onClick={() => setSliderImageLink("/call-of-duty-mobile-hero-a.jpg")} src={"/call-of-duty-mobile-hero-a.jpg"} height={100} width={100} alt="card1" className={`w-40 h-24 border-[1px] border-teal-200 rounded-2xl scale-${scale}`}/>

                <Image onClick={() => setSliderImageLink("/blackCell.jpg")} src={"/blackCell.jpg"} height={100} width={100} alt="card1" className={`w-40 h-24 border-[1px] border-teal-200 rounded-2xl scale-${scale}`}/>

                <Image onClick={() => { handleScale(); setSliderImageLink("/card3.jpg") ;return null }}  src={"/card3.jpg"} height={100} width={100} alt="card1" className={`w-32 h-24 border-[1px] border-teal-200 rounded-2xl scale-${scale}`}/>
            </div>
        </div>   
      </div> 
    </>
  )
}
