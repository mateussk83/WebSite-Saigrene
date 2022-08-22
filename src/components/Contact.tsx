import { EnvelopeSimple, MapPin, WhatsappLogo } from "phosphor-react";


export function Contact() {
  return (
    <section id="Contact" className="justify-center flex items-center  gap-36 pt-[8rem] bg-white pb-[160px]">
      <div className="">
        
        <h1
          className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[27.5rem] leading-[52.08px] text-left"
        >Entre em contato com a gente!</h1>

        <div
          id="content"
          className="mt-4 text-gray-700 font-normal text-lg leading-releaxed"
        >
          <span className="flex items-center mt-10 gap-2"><MapPin size={20} color="#3d3d3d" />Avenida Anibal Correia, 297</span>
          <span className="flex items-center mt-4 gap-2"><EnvelopeSimple size={20} color="#3d3d3d" /> mateussk83@gmail.com</span>

          <a
            href="#"
            className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm py-[1rem] flex justify-center w-[250px] items-center mt-10">
            <WhatsappLogo size={25} weight="light"/>
            Agende sua Consulta
          </a>
      </div>
    </div>
    <div id="col-b">
      <img
        className="block w-[30rem] max-w-[100%] "
        src="./src/assets/moreno.png"
        alt="Doutora Erica Luciana Garcia"
      />
    </div>
  </section>
  )
}