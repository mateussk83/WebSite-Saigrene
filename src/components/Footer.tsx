import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="bg-blue-700 flex  justify-between items-center">

      <div className="my-20 ml-28 border-none">
        <Logo />
        <span className="flex items-center text-sm mt-6">©2022 - Instituto Saigrene</span>
        <span className="flex items-center text-sm mt-3"> Todos os direitos reservados.
        </span>
      </div>
      <div className="flex items-center mr-28 gap-3">
        <a href=""><InstagramLogo size={25} color="#fff" /></a>
        <a href=""><WhatsappLogo size={25} color="#fff" /></a>
        <a href=""><LinkedinLogo size={25} color="#fff" /></a>
      </div>
    </div>
  )
}