import { Link } from "react-scroll";

interface MenuProps {
 numberScrollY: number
}
export function Menu({numberScrollY}:MenuProps) {
 return (
  
  <div className="hidden md:w-[100%] md:flex md:h-[100%] bg-blue-700 text-blue-200 pt-20 border-none md:flex-col md:items-center md:justify-center">
        <ul className="gap-10 flex flex-col items-center justify-center content-center">
          <li>
            <Link
              activeClass="active"
              to="home"    
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold`}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold `}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold `}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold `}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold focus:font-bold `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Contato
            </Link>
          </li>
        </ul>
       
        <a href="" className={` border rounded-full fs-[1.8rem] py-2 px-6 fw-700 cursor-pointer text-sm font-bold transtition-colors duration-200 ${numberScrollY == 0 ? "bg-transparent text-blue-700 border-blue-700 hover:text-gray-100 hover:border-white hover:bg-blue-700"  : "bg-blue-700 text-white hover:bg-blue-300 hover:text-blue-700"}`}
      >AGENDE SUA CONSULTA</a>
      </div>
 )
}