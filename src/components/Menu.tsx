import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Link } from "react-scroll";

interface MenuProps {
 numberScrollY: number
}
export function Menu({numberScrollY}:MenuProps) {
 return (
  
  <div className="hidden md:w-[100%] md:flex md:h-[100%] bg-blue-700 gap-9 text-blue-200 border-none md:flex-col md:items-center md:justify-center">
        <ul className="gap-9 flex flex-col items-center justify-center content-center">
          <li>
            <Link
              activeClass="active"
              to="home"    
              className={`font-sans font-bold text-2xl cursor-pointer`}
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-100}
              >
              Início
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="service"        
              className={`font-sans font-bold text-2xl `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Serviços
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="depoiment"        
              className={`font-sans font-bold text-2xl `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Depoimentos
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="sobre"        
              className={`font-sans font-bold text-2xl `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Sobre
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="contato"        
              className={`font-sans font-bold text-2xl `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Contato
            </Link>
          </li>
        </ul>
       
        <a href="" className={` border rounded-full fs-[1.8rem] py-4 px-8 fw-700 cursor-pointer text-sm font-bold text-blue-700 bg-white`}
      >AGENDE SUA CONSULTA</a>

      <div className="flex gap-8 pt-11 pb-[100%]">
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><InstagramLogo size={25} color="#fff" /></a>
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><WhatsappLogo size={25} color="#fff" /></a>
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><LinkedinLogo size={25} color="#fff" /></a>
     
      </div>
      </div>
 )
}