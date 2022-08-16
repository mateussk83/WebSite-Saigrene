import { WhatsappLogo } from "phosphor-react";

export function About() {
  return (
    <section id="home" className=" justify-center gap-16 flex items-center pt-[8rem]">
      <div id="col-b">
        <img
          className="block w-[27rem] max-w-[100%] "
          src="./src/assets/happy-doctors.png"
          alt="Doutora Erica Luciana Garcia"
        />
      </div>
      <div className="flex justify-center" id="wrapper">
        <header className="">
          <h4
            className="text-blue-700 font-bold text-left text-[0.875rem] leading-snug w-[37.5rem] tracking-wide"
          >SOBRE NÓS </h4>
          <h1
            className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[27.5rem] leading-[52.08px] text-left"
          >Entenda quem somos e por que existimos</h1>

          <div
            id="content"
            className="mt-4 text-gray-700 font-normal text-lg leading-releaxed w-[37.5rem]"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptatibus rerum officiis, provident reiciendis laboriosam laborum eos voluptatum autem dolorem atque tempora. Ad corporis et aut minima! Quo, reiciendis ipsum.
              lorem
            </p>
            <a
              href="#"
              className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm py-[1rem] flex justify-center w-[250px] items-center mt-8">
              <WhatsappLogo size={25} weight="light"/>
              Agende sua Consulta
            </a>
          </div>
        </header>
      </div>
    </section>
    )
}