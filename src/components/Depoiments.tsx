import { Person } from "phosphor-react";

export function Depoiments() {
  return (
    <div className="bg-white pb-[14rem]">
      <header className="flex flex-col items-center">
        <h4 className="text-[0.875rem] leading-snug text-blue-700 tracking-wide font-bold pt-[8rem]">DEPOIMENTOS</h4>
        <h1 className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[37.5rem] leading-[52.08px] text-center" >O que os clientes dizem sobre a Saigrene</h1>
      </header>
      <div className="grid grid-cols-2 gap-8 mt-[3.75rem] ">

        <div className="bg-blue-200 p-8 ml-[7.75rem] border border-solid border-blue-200 rounded">
          <Person size={35} color="#6848c8" className="mb-5" />
          <p className="text-gray-700 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum alias illo quos, sapiente libero veritatis odit nesciunt impedit atque aut eaque obcaecati! Molestiae eaque accusamus voluptatibus nobis, beatae laborum!</p>
          <div className="flex items-center text-blue-700 font-bold">
            <img
              className="w-[3rem] h-[3rem] rounded-full"
              src="https://github.com/mateussk83.png" />
            <h1 className="ml-4">Mateus Garcia</h1>
          </div>



        </div>
        <div className="bg-blue-200 p-8 mr-[7.75rem] border border-solid border-blue-200 rounded">
          <Person size={34} color="#6848c8" className="mb-5" />
          <p className="text-gray-700 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum alias illo quos, sapiente libero veritatis odit nesciunt impedit atque aut eaque obcaecati! Molestiae eaque accusamus voluptatibus nobis, beatae laborum!</p>
          <div className="flex items-center text-blue-700 font-bold">
            <img
              className="w-[3rem] h-[3rem] rounded-full"
              src="https://github.com/mateussk83.png" />
            <h1 className="ml-4">Mateus Garcia</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-[3.125rem]">
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
      </div>
    </div>
  )
}