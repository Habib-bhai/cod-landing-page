"use client"
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";
import Link from "next/link";
import {useDataContext}  from "./context/context";



export default function Home() {

  const {data, setDataToSend} = useDataContext()

 
  
  return (
    <>
    <div id="hero">
      {/* hero section */}
    <Image src={"/hero.jpg"} width={500 } height={500} className="w-screen h-screen object-cover " alt="bg"/>
       
         <Navbar/>
      
        <button className="text-xl font-semibold w-72 h-12 text-white absolute left-12  bottom-40 md:bottom-28 md:left-1/2 bg-[#f96900] hover:bg-[#fb9700] rounded-lg "> PRE-ORDER VAULT EDITION</button>  
    </div>
   
   {/* games */}
   <div className="w-screen flex md:flex-nowrap flex-wrap justify-center items-center mt-6 gap-10 mb-10">
 
      
      <Link href={"/book-yours"} onClick={()=> setDataToSend(data[1])}><div className="img relative overflow-hidden rounded-2xl border-gray-800">
            <Image src={"/MWIII_S6.jpg"} alt="shoes" width={500} height={500} className="h-72 w-72 md:w-[300px] md:h-[300px] border-gray-800 object-cover transition transform duration-500 ease-out hover:scale-125  " />
            <h1 className="text-white absolute bottom-5 left-5 shadow-lg shadow-gray-700 font-sans text-xl font-extrabold">MODERN WARFARE III</h1>
      </div></Link>   


      <Link href={"/book-yours"} onClick={()=> setDataToSend(data[3])}><div className="img relative overflow-hidden rounded-2xl border-gray-800">
            <Image src={"/blackCell.jpg"} alt="shoes" width={500} height={500} className="h-72 w-72 md:w-[300px] md:h-[300px] border-gray-800 object-cover transition transform duration-500 ease-out hover:scale-125  " />
            <h1 className="text-white absolute bottom-5 left-[30%] shadow-lg shadow-gray-700 font-sans text-xl font-extrabold">BLACK CELL</h1>
      </div></Link>
   </div>
   {/* Cards */}

   <h1 className="text-white font-heading text-4xl font-extrabold ml-5 ">GET THE GAMES :</h1>
    <hr />


   <div className="w-screen flex md:flex-nowrap flex-wrap justify-center items-center mt-6 gap-10 md:gap-32">

    <Link href={"/book-yours"} onClick={() => setDataToSend(data[0])}><Card topPx={135} card1="/card1.jpg" logo="/BO6_Banner.png" para="CALL OF DUTY" heading="BLACK OPS 6"/> </Link>

    <Link href={"/book-yours"} onClick={() => setDataToSend(data[2])}><Card topPx={125} card1="/card3.jpg" logo="/warzone-logo-sm.png" para="CALL OF DUTY" heading="WARZONE"/></Link>

    <Link href={"/book-yours"} onClick={()=> setDataToSend(data[4])}><Card topPx={120} card1="/card4.jpg" logo="/wzm-logo-sm.png" para="CALL OF DUTY" heading="WARZONE MOBILE"/></Link>
   </div>
    </>
  );
}
