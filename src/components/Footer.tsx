import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="bg-blue-700 flex  justify-between items-center md:hidden">

      <div className="my-10 ml-28 border-none">
        <Logo valueScroll={0} />
      </div>
      <div className="flex items-center mr-28 gap-3">
        <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><InstagramLogo size={25} color="#fff" /></a>
        <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><WhatsappLogo size={25} color="#fff" /></a>
        <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><LinkedinLogo size={25} color="#fff" /></a>
      </div>
    </div>
  )
}