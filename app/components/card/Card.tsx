import React from 'react'
import Image from 'next/image'
export default function Card({card1, logo, heading, para, topPx}: {card1: string, logo: string, heading: string, para: string, topPx: number}) {
    
  return (
    <div className='w-64 h-80 bg-[#24272a] relative  flex flex-col justify-center items-center rounded-xl shadow-lg shadow-black hover:shadow-xl hover:shadow-black border-[1px] border-white'>
        <div className="img h-[60%] overflow-hidden rounded-t-xl  absolute top-0">
            <Image src={`${card1}`} alt="shoes" width={500} height={500} className="h-64 w-72 md:w-[300px] md:h-[300px] object-cover transition transform duration-500 ease-out hover:scale-125  " />
        </div>       
         <Image src={`${logo}`} alt="shoes" width={200} height={200} className={` absolute top-[${topPx}px]`} />   
         <p className=' text-white absolute bottom-16 font-gaming'>{para}</p>
         <h1 className=' text-white absolute bottom-10 font-sans text-xl font-extrabold'>{heading}</h1>
    </div>
  )
}
