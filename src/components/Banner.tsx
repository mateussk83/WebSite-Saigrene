import { WhatsappLogo } from "phosphor-react";

export function Banner() {
  return (
    <div className=" mt-[-9.6rem] flex bg-blue-700 justify-between items-center mx-[7rem] rounded-2xl md:hidden">
      <div>
        <h1 className="text-white font-bold text-[2.5rem] w-[36rem] leading-[3.25rem] text-left py-[6.25rem] pl-[6.25rem]">
          Comece a cuidar de sua saúde agora mesmo
        </h1>
      </div>
      <a
        href="#"
        className="text-blue-700 uppercase font-bold gap-[0.75rem] bg-white rounded-full text-sm px-2 py-[1rem] border flex justify-center w-[250px] items-center mr-[6.25rem] duration-200 hover:bg-blue-700 hover:text-white">
        <WhatsappLogo size={25} weight="light" />
        Agende sua Consulta
      </a>
    </div>
  )
}