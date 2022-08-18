import { Person } from "phosphor-react";
import { useParams } from "react-router-dom";



export function Depoiments() {

  const depoiments = [
    {
      id: 1,
      comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium, similique ab delectus facere possimus, libero ut est sunt perferendis error deleniti. Nam iste numquam magni nisi porro distinctio quos.",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 2,
      comment: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. ",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    }
  ];
  return (
    <div className="bg-white pb-[14rem]">
      <header className="flex flex-col items-center">
        <h4 className="text-[0.875rem] leading-snug text-blue-700 tracking-wide font-bold pt-[8rem]">DEPOIMENTOS</h4>
        <h1 className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[37.5rem] leading-[52.08px] text-center" >O que os clientes dizem sobre a Saigrene</h1>
      </header>
      <div className="flex items-center justify-center gap-8 mt-[3.75rem] mx-[7.75rem]">

        {
          depoiments.map(depoiment => {
            return (
              <div className="bg-blue-200 p-8 border border-solid border-blue-200 rounded w-[544px] h-[273px]">
                <Person size={35} color="#6848c8" className="mb-5" />
                <p className="text-gray-700 my-5 h-24">{depoiment.comment}</p>
                <div className="flex items-center text-blue-700 font-bold">
                  <img
                    className="w-[3rem] h-[3rem] rounded-full"
                    src={depoiment.patient.avatarURL} />
                  <h1 className="ml-4">{depoiment.patient.name}</h1>
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="flex items-center justify-center gap-2 mt-[3.125rem]">
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
        <span className="h-4 w-4 bg-blue-200 rounded-full hover:bg-blue-700"></span>
      </div>
    </div>
  )
}