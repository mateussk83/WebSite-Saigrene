import { List } from "phosphor-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

interface ScrollProps {
  valueScrollY: number;
  disabledComponent: () => void
  disabledValue? : number
}


export function Navigation({ valueScrollY, disabledComponent, disabledValue }:ScrollProps) {
  let colorLogo1 = 'fill-gray-100'
  let colorLogo2 = 'fill-gray-100'
  function tradeColor() {
    if (valueScrollY > 0) {
      colorLogo1 = 'fill-black'
      colorLogo2 = 'fill-blue-700'
    }
  }
  function clickDisabledComponent() {
    disabledComponent()
  }

  tradeColor()
 return (
    <header>
      <div className={` fixed py-[1.65rem] text-white md:hidden md:invisible transition duration-200 w-full flex items-center justify-center gap-20 px-10 border-none ${valueScrollY > 0 ? 'bg-none': 'bg-blue-700'} pr-5 `}>
        <div>

        <a href="#Home" className="">
          <Logo valueScroll={valueScrollY} />
        </a>
        </div>
      <div className="py-[1.65rem] pr-[1.25rem] md:hidden md:invisible">
        <ul className="gap-10 flex">
          <li>
            <Link
              activeClass="active"
              to="home"    
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
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
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Contato
            </Link>
          </li>
        </ul>
        
      </div>
      <div 
      className={` border rounded-full fs-[1.8rem] py-2 px-6 fw-700 cursor-pointer text-sm font-bold transtition-colors duration-200 md:hidden md:invisible ${valueScrollY > 0 ? "bg-transparent text-blue-700 border-blue-700 hover:text-gray-100 hover:border-white hover:bg-blue-700"  : "bg-blue-700 text-white hover:bg-blue-300 hover:text-blue-700"}`}
      >
        <a href="" >AGENDE SUA CONSULTA</a>
        </div>
        <div>
      </div>
      
      
      </div>
      <div id="celphone"className={`w-full py-2 md:flex md:items-center md:justify-between md:gap-[12rem] px-10 bg-blue-700 hidden border-none pb-8`}>
        
        <Logo valueScroll={0} celphone={true} />
        <a onClick={clickDisabledComponent}>

           <List size={33} weight="bold" color="#fff"/>
        </a>
  </div>
        



    </header>

  )
}