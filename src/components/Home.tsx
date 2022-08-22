import { WhatsappLogo } from 'phosphor-react'

export function Home() {
  return (
    <section id="home" className="bg-blue-300  justify-center  grid grid-flow-col">
      <div className="pt-20 pl-[7.75rem] " id="wrapper">
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
              className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm px-2 py-[1rem] flex justify-center w-[250px] items-center mt-8">
              className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm py-[1rem] flex justify-center w-[250px] items-center mt-8">
              <WhatsappLogo size={25} weight="light"/>
              Agende sua Consulta
            </a>
          </div>
        </header>
      </div>

      <div id="col-b" className="">
      <div id="col-b">
        <img
          className="block left-0 w-[27rem] rigth-[18.75rem] max-w-[100%] mr-[5.2rem]"
          className="block w-[27rem] max-w-[100%] "
          src="./src/assets/mamae.png"
          alt="Erica Luciana Garcia"
        />
      </div>
    </section>
  )
}
