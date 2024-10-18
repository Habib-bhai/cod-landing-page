import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen relative bg-black flex flex-col justify-center items-center mt-10 ">
      <div className="flex flex-wrap mt-10 justify-center items-center gap-10">
        <Link href={"https://www.activision.com/legal"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Legal</p></Link>|
        <Link href={"https://www.activision.com/legal/terms-of-use"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Terms of Use</p></Link>|
        <Link href={"https://www.activision.com/legal/privacy-policy"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Privacy Policy</p></Link>|
        <Link href={"https://careers.activision.com/"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Careers</p></Link>|
        <Link href={"https://www.activision.com/legal/cookie-policy"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Cookie Policy</p></Link>|
        <Link href={"https://support.activision.com/"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Support</p></Link>|
        <Link href={"https://www.callofduty.com/values"} target="_blank"><p className="hover:cursor-pointer text-gray-300 text-xl">Code of Conduct</p></Link>|
      </div>

      <p className="h-[1px] w-screen bg-white/50 my-5"></p>

      <div className="flex flex-wrap  justify-center items-center gap-8">
        <Image src={"/privacy.jpg"} height={50} width={50} alt="privacy" className="w-28 object-cover"/>
        <Image src={"/cod-en.png"} height={50} width={50} alt="cod-hub-esrb-en" className="w-28 "/>
      </div>

      <p className="font-heading mt-5 text-gray-300 w-[300px] md:w-[500px] h-32">© 2024 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, and CALL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.</p>
      <p className="font-heading mt-10 text-gray-300 w-[350px] md:w-[500px] h-32">© 2024 Compass International Pictures, Inc. All Rights Reserved.</p>

     <Link href={"#navbar"}> <button className="text-white text-4xl font-heading font-extrabold w-64 border-[2px] rounded-2xl ">GO BACK</button> </Link>
    </div>
  )
}
