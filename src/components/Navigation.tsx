import { useState } from "react";
import { Logo } from "./Logo";

const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {

  const containerHeight = event.currentTarget.clientHeight;
  const scrollHeight = event.currentTarget.scrollHeight;

  const scrollTop = event.currentTarget.scrollTop;
  return (
    console.log(scrollHeight, scrollTop)
  )
};

export function Navigation() {


  return (

    <header className={` w-full py-2 flex items-center justify-between bg-blue-700 border-b `} >
      <div className="py-[1.65rem] pl-[7.75rem] text-white click:bb-1">
        <a href="#Home">
          <Logo />
        </a>
      </div>

      <div className="py-[1.65rem] pr-[1.25rem]">
        <ul className="gap-10 flex ">
          <li>
            <a
              href="#"
              className=" transition duration-100 pb-[1.875rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold  ">
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-100 pb-[1.875rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold">
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-100 pb-[30px] hover:border-b-2 hover:font-bold first focus:border-b-2 focus:font-bold">
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-100 pb-[30px] hover:border-b-2 hover:font-bold first focus:border-b-2 focus:font-bold">
              Sobre
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-blue-700 text-white border rounded-full fs-[1.8rem] py-2 px-6 mr-[7.75rem] fw-700 cursor-pointer text-sm font-bold transtition-colors">
        <a href="">AGENDE SUA CONSULTA</a>
      </div>
    </header>

  )
}