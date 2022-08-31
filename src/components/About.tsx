import { ArrowUp, WhatsappLogo } from "phosphor-react";
import { Element } from "react-scroll";

import doctor from "../src/assets/happy-doctors.png"

export function About() {
  return (
    <Element name="sobre">
      <section id="home" className="pt-[8rem] mb-[160px]">
        <div className="flex justify-center items-center gap-16 md:flex-col md:text-center">
          <div id="col-a" className="flex justify-center items-center">
            <img
              className="block w-[27rem] max-w-[100%] md:w-[80%]"
              src={doctor}
              alt="Doutor Feliz"
            />
          </div>

          <div id="col-b">
            <h4
              className="text-blue-700 font-bold text-left text-[0.875rem] leading-snug w-[37.5rem] tracking-wide md:text-center"
            >SOBRE NÓS </h4>

            <div className="md:items-center md:text-center flex flex-col">
              <h1
                className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[30.5rem] md:w-[24.5rem] leading-[52.08px] md:text-center"
              >Entenda quem somos e por que existimos</h1>
              <span className="mt-4 text-gray-700 font-normal text-lg leading-releaxed w-[37.5rem] md:w-[23.5rem] ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptatibus rerum officiis, provident reiciendis laboriosam laborum eos voluptatum autem dolorem atque tempora. Ad corporis et aut minima! Quo, reiciendis ipsum.
                lorem
              </span>
              <a
                href="#"
                className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full duration-200 text-sm py-[1rem] flex justify-center w-[250px] items-center mt-8 hover:bg-blue-900">
                <WhatsappLogo size={25} weight="light" />
                Agende sua Consulta
              </a>
            </div>
          </div>
        </div>


      </section>
    </Element>
  )
}