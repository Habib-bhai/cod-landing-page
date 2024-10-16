import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen relative bg-black flex flex-col justify-center items-center mt-10 ">
      <div className="flex flex-wrap mt-10 justify-center items-center gap-10">
        <p className="hover:cursor-pointer">Legal</p>|
        <p className="hover:cursor-pointer">Terms of Use</p>|
        <p className="hover:cursor-pointer">Privacy Policy</p>|
        <p className="hover:cursor-pointer">Careers</p>|
        <p className="hover:cursor-pointer">Cookie Policy</p>|
        <p className="hover:cursor-pointer">Support</p>|
        <p className="hover:cursor-pointer">Code of Conduct</p>|
      </div>

      <p className="h-[1px] w-screen bg-white/50 my-5"></p>

      <div className="flex flex-wrap  justify-center items-center gap-8">
        <Image src={"/privacy.jpg"} height={50} width={50} alt="privacy" className="w-28 object-cover"/>
        <Image src={"/cod-en.png"} height={50} width={50} alt="cod-hub-esrb-en" className="w-28 "/>
      </div>

      <p className="font-heading mt-5 text-gray-300 w-[400px] md:w-[500px] h-32">© 2024 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, and CALL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.</p>
      <p className="font-heading  text-gray-300 w-[400px] md:w-[500px] h-32">© 2024 Compass International Pictures, Inc. All Rights Reserved.</p>

     <Link href={"#hero"}> <button className="text-white absolute bottom-9 text-4xl font-heading font-extrabold w-64 border-[2px] rounded-2xl ">GO BACK</button> </Link>
    </div>
  )
}
