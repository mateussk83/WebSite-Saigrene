import { WhatsappLogo } from 'phosphor-react'

export function Home() {
  return (
     <section id="home" className="bg-blue-300  justify-center flex items-center">
      <div className="pt-20 flex justify-center" id="wrapper">
        <header className="">
          <h4
            className="text-blue-700 font-bold text-left text-[0.875rem] leading-snug w-[37.5rem] tracking-wide"
          >BOAS-VINDAS AO INSTITUTO SAIGRENE 👋</h4>
          <h1
            className="text-gray-900 font-bold mt-3 text-[3.1rem] w-[37.5rem] leading-[67.6px] text-left"
          >Assistência psicologica simplificada para todos</h1>
          <div
            id="content"
            className="mt-4 text-gray-700 font-normal text-lg leading-releaxed w-[37.5rem]"
          >
            <p>
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
         className="block w-[27rem] max-w-[100%] "
          src="./src/assets/mamae.png"
          alt="Erica Luciana Garcia"
        />
      </div>
    </section>
  )
}
