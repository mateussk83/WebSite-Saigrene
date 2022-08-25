import { List } from "phosphor-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



interface ScrollProps {
  valueScrollY: number;
}

export function Navigation({ valueScrollY }:ScrollProps) {

  
 return (
    <header className={`fixed w-full py-2 flex items-center justify-between bg-blue-700 border-b md:bg-local ${valueScrollY > 0 ? "bg-transparent" : ""}`} >
      <div className="py-[1.65rem] pl-[7.75rem] text-white click:bb-1 md:flex md:items-center md:justify-between md:gap-[7rem] md:pl-[15%]">
        <div>
        <a href="#Home" className="">
          <Logo />
        </a>
        </div>
        <div className="hidden invisible md:visible md:flex">
        <a className="">
        <List size={32} color="#fff" />
      </a>
      </div>
      </div>

      <div className="py-[1.65rem] pr-[1.25rem]">
        <ul className="gap-10 flex">
          <li>
            <Link
              activeClass="active"
              to="home"        
              className="transition duration-100 pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible "
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Início
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="service"        
              className="transition duration-100 pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible "
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
              className="transition duration-100 pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible "
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
              className="transition duration-100 pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible "
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Sobre
            </Link>
          </li>
        </ul>
        
      </div>

      <div className="bg-blue-700 text-white border rounded-full fs-[1.8rem] py-2 px-6 fw-700 cursor-pointer text-sm font-bold transtition-colors hover:bg-blue-300 hover:text-blue-700 duration-200 md:invisible">
        <a href="">AGENDE SUA CONSULTA</a>
      </div>
      <div>
      
      </div>
    </header>

  )
}