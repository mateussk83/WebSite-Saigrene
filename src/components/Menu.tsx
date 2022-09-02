import { Link } from "react-scroll";

export function Menu() {
 return (
  
  <div className="hidden md:w-[100%] md:flex md:h-[100%] bg-blue-700 text-blue-200 pt-20 border-none">
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold `}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Contato
            </Link>
          </li>
        </ul>
        
      </div>
 )
}