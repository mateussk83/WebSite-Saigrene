import { WhatsappLogo } from 'phosphor-react'
import { Element, animateScroll as scroll } from 'react-scroll'

export function Home() {
  return (
    <Element
    name="inicio"
    >
     <section id="home" className="mt-[-2rem] bg-blue-300 justify-center flex items-center md:flex-col md:mt-0 ">
     <div id="col-a">
       
       <img
        className="w-[27rem] h-[50%] md:w-[80%] md:ml-4 mt-[7.5rem] md:hidden"
         src="./src/assets/denise.png"
         alt="Erica Luciana Garcia"
       />      
     </div>
      <div className=" flex justify-center items-center" id="wrapper">
        <header>
          <h4
            className="text-blue-700 font-bold text-center text-[0.875rem] leading-snug w-[37.5rem] tracking-wide"
          >BOAS-VINDAS AO INSTITUTO SAIGRENE 👋</h4>
           <div id="title" className="items-center text-center flex flex-col">
          <h1
            className="text-gray-900 font-bold mt-3 text-[3.1rem] w-[37.5rem] leading-[67.6px] md:w-[24.5rem] text-center"
          >Assistência psicologica simplificada para todos</h1>
          </div>
          <div
            id="content"
            className="mt-4 text-gray-700 font-normal text-lg leading-releaxed w-[34.5rem] flex flex-col items-center justify-center"
          >
            <p className='md:w-[24.5rem] text-center'>
              Os psicologos vão além dos sintomas para tratar a causa raiz de
              sua doença e proporcionar uma cura a longo prazo.
            </p>
            <a
              href="#"
              className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm py-[1rem] flex justify-center w-[250px] items-center mt-8 hover:bg-blue-900 duration-200">
              <WhatsappLogo size={25} weight="light"/>
              Agende sua Consulta
            </a>
          </div>
        </header>
      </div>

       <div id="col-b">
       
        <img
         className="block w-[27rem] pt-6 w-[80%] md:w-[80%] md:ml-4 mt-20"
          src="./src/assets/mamae.png"
          alt="Erica Luciana Garcia"
        />      
      </div>
    </section>
    </Element>
  )
}
