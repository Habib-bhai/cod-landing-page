"use client"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [display, setDisplay] = useState("hidden")
  return (
    <>
      <div id="navbar" className="z-30 w-screen  h-10 bg-gray-800 bg-opacity-30 backdrop-blur-3xl absolute top-3 flex justify-evenly items-center font-gaming text-xl ">
      <Link href={"/"}><svg width="138" height="24" viewBox="0 0 138 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.4112 0H33.7984V24H45.0392V19.472H40.4112V0Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M52.784 0H46.1712V24H57.412V19.472H52.784V0Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9136 0.272C12.7392 0.0864 12.4888 0 12.232 0H3.3152C3.0584 0 2.808 0.0856 2.6336 0.272C2.0168 0.928 1.0216 2.0584 0.1912 3.1288C0.0632 3.2944 0 3.5184 0 3.7264V20.272C0 20.4816 0.0624 20.7056 0.1912 20.8696C1.0216 21.9408 2.0168 23.0704 2.632 23.7272C2.8064 23.9128 3.0568 23.9992 3.3136 23.9992H12.2304C12.4872 23.9992 12.7376 23.9136 12.912 23.7272C13.5272 23.0712 14.5224 21.9408 15.3528 20.8696C15.4808 20.704 15.544 20.48 15.544 20.272V13.6264H9.5056V20.0016H6.0392V3.9984H9.5056V10.3736H15.544V3.7288C15.544 3.5192 15.4816 3.2952 15.3528 3.1312C14.5224 2.06 13.5272 0.9304 12.912 0.2744H12.9128V0.272H12.9136Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8296 0.272C29.6552 0.0864 29.4048 0 29.148 0H20.2312C19.9744 0 19.724 0.0856 19.5496 0.272C18.9344 0.928 17.9392 2.0584 17.1088 3.1288C16.9808 3.2944 16.9176 3.5184 16.9176 3.7264V23.9992H22.956V16.9288H26.4224V23.9992H32.4608V3.7272C32.4608 3.5176 32.3984 3.2936 32.2696 3.1296C31.4392 2.0584 30.444 0.9288 29.8288 0.2728H29.8296V0.272ZM22.9568 12.9384V3.9984H26.4232V12.9384H22.9568Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.2184 20.0016H95.752V0H89.7136V20.2728C89.7136 20.4824 89.776 20.7064 89.9048 20.8704C90.7352 21.9416 91.7304 23.0712 92.3456 23.728C92.52 23.9136 92.7704 24 93.0272 24H101.944C102.201 24 102.451 23.9144 102.626 23.728C103.241 23.072 104.236 21.9416 105.066 20.8704C105.195 20.7048 105.258 20.4808 105.258 20.2728V0H99.2192V20.0016H99.2184Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.692 0.272C85.5176 0.0864 85.2672 0 85.0104 0H72.7824V24H85.0104C85.2672 24 85.5176 23.9144 85.692 23.728C86.3072 23.072 87.3024 21.9416 88.1328 20.8704C88.2608 20.7048 88.324 20.4808 88.324 20.2728V3.7288C88.324 3.5192 88.2616 3.2952 88.1328 3.1312C87.3024 2.06 86.3072 0.9304 85.692 0.2744V0.272ZM82.2856 14.1392V20.0016H78.8216V3.9984H82.2856V14.1392Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M129.95 0H135.596V10.4632C135.596 10.6672 135.526 10.8656 135.394 11.024L131.434 15.8104V24H124.93V15.8104L120.982 11.024C120.85 10.8656 120.78 10.6672 120.78 10.4632V0H126.414V8.9208L127.882 10.6624H128.491L129.95 8.9208V0Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.9488 4.9096C61.8712 4.8264 61.7592 4.788 61.6448 4.788H57.1304C57.016 4.788 56.9032 4.8264 56.8264 4.9096C56.5512 5.2024 56.3272 5.488 55.9552 5.9664C55.8984 6.04 55.8696 6.14 55.8696 6.2328V13.7216C55.8696 13.8152 55.8984 13.9144 55.9552 13.988C56.3264 14.4664 56.5512 14.752 56.8264 15.0448C56.904 15.128 57.016 15.1664 57.1304 15.1664H61.6448C61.7592 15.1664 61.872 15.128 61.9488 15.0448C62.224 14.752 62.448 14.4664 62.82 13.988C62.8768 13.9144 62.9056 13.8144 62.9056 13.7216V6.2328C62.9056 6.1392 62.8768 6.04 62.82 5.9664C62.4496 5.488 62.224 5.2024 61.9488 4.9096ZM60.208 11.0344V12.9272H58.5656V7.0248H60.208V11.0344Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.0552 7.1984V15.1664H66.7528V11.7408H69.6416V9.3304H66.7528V7.1984H70.0136V4.788H64.0552V7.1984Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M119.601 0H116.102H110.062H106.551V4.9144H110.057V24H116.095V4.9144H119.601V0Z" fill="white" />
            <path d="M134.73 21.0272H136.159C136.275 21.0272 136.364 21.0576 136.426 21.1176C136.49 21.1784 136.522 21.2632 136.522 21.3744V21.7416C136.522 21.8352 136.494 21.9104 136.439 21.9656C136.384 22.0208 136.306 22.0488 136.205 22.0488H136.086L136.084 22.1096C136.124 22.116 136.157 22.1336 136.182 22.1624C136.21 22.1912 136.238 22.2376 136.268 22.3032L136.56 22.9152H136.137L135.79 22.1576H135.078V22.9152H134.73V21.0272H134.73ZM136.122 21.8808C136.138 21.8808 136.151 21.8776 136.159 21.8704C136.167 21.8624 136.172 21.8488 136.172 21.8304V21.3568C136.172 21.34 136.168 21.3272 136.159 21.3192C136.151 21.3112 136.138 21.3064 136.122 21.3064H135.077V21.88H136.122V21.8808Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M135.596 23.692C136.53 23.692 137.287 22.9352 137.287 22.0008C137.287 21.0664 136.53 20.3096 135.596 20.3096C134.662 20.3096 133.905 21.0664 133.905 22.0008C133.905 22.9352 134.662 23.692 135.596 23.692ZM135.596 24C136.7 24 137.595 23.1048 137.595 22.0008C137.595 20.8968 136.7 20.0016 135.596 20.0016C134.492 20.0016 133.597 20.8968 133.597 22.0008C133.597 23.1048 134.492 24 135.596 24Z" fill="white" />
          </svg> </Link>
        <ul className="hidden md:flex justify-center items-center gap-10">
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/book-yours"}><li>Book Yours</li></Link>
        </ul>

        <svg onClick={()=> setDisplay("flex")} xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed" className="md:hidden"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

        <div className={`w-screen  md:hidden ${display} flex-col gap-10 justify-center items-center bg-gray-800 md:bg-opacity-30 bg-opacity-85 backdrop-blur-3xl absolute top-12 `}>
        <svg onClick={()=> setDisplay("hidden")} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        <Link href={"/"}><p className="text-2xl">Home</p></Link>  
        <Link href={"/about"}><p className="text-2xl">About</p></Link>  
        <Link href={"/book-yours"}><p className="text-2xl">Book Yours</p></Link>  
        </div>
      </div>
    </>
  )
}

export default Navbar