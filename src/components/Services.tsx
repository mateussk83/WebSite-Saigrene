import { CheckCircle } from "phosphor-react";

export function Services() {
  return (
    <div className="mb-[8rem]">
      <header className="flex flex-col items-center justify-start ">
        <h4 className="text-[0.875rem] leading-snug text-blue-700 tracking-wide font-bold pt-[8rem]">SERVIÇOS</h4>
        <h1 className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[37.5rem] leading-[52.08px] text-center" >Como podemos ajudá-lo a se sentir melhor?</h1>
      </header>
      <div id="cards" className="grid grid-cols-3 text-left mt-[4rem]">
        <div
          className=" w-[347px] h-[207px] ml-[7.75rem] border border-solid rounded-md bg-white p-6">
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div
          className="w-[347px] h-[207px] border border-solid rounded-md bg-white ml-[3.75rem] mr-[2.5rem] p-6">
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4 leading-snug">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div
          className="  w-[347px] h-[207px] border border-solid rounded-md bg-white p-6 mr-[7.75rem]">
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div
          className=" mt-[2.5rem] w-[347px] h-[207px] border border-solid rounded-md bg-white p-6 ml-[7.75rem]">
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div
          className=" mt-[2.5rem] w-[347px] h-[207px] ml-[3.75rem] border border-solid rounded-md bg-white p-6">
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div
          className=" mt-[2.5rem] w-[347px] h-[207px] border border-solid rounded-md bg-white p-6 mr-[7.75rem]" >
          <CheckCircle size={24} color="#6848c8" weight="duotone" />

          <h3 className="text-gray-900 font-bold mt-4">Terapia de casal</h3>
          <p className="text-gray-700  mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </p>
        </div>
      </div>
    </div>
  )
} 