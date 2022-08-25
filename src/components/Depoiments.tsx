import { Person } from "phosphor-react";
import { useState } from "react";
import { Element } from "react-scroll";


export function Depoiments() {
  const [ pageDepoiment, setpageDepoiment ] = useState(0);
  
  const depoiments = [
    {
      id: 0,
      comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium, similique ab delectus facere possimus, libero ut est sunt perferendis error deleniti. Nam iste numquam magni nisi porro distinctio quos.",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 1,
      comment: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. ",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 2,
      comment: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 3,
      comment: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 4,
      comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium, similique ab delectus facere possimus, libero ut est sunt perferendis error deleniti. Nam iste numquam magni nisi porro distinctio quos.",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    },
    {
      id: 5,
      comment: "Amentdasdasdasd asd asd asd asd asd asd asd asd asd asd as dasd as dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd as dasd asd asd asd asd sdasd asd asd asd asdasd asd asd asd asd asd asd asd asd asd asd asd asd a ",
      patient: {
        avatarURL: "https://github.com/mateussk83.png",
        name: "Mateus Garcia"
      }
    }
  ];
  return (

    <Element name="depoiment">
    <div className="bg-white pb-[14rem] md:pb-[8rem]">
      <header className="flex flex-col items-center">
        <h4 className="text-[0.875rem] leading-snug text-blue-700 tracking-wide font-bold pt-[8rem]">DEPOIMENTOS</h4>
        <h1 className="text-gray-900 font-bold mt-3 text-[2.5rem] w-[37.5rem] leading-[52.08px] text-center md:w-[24.5rem]" >O que os clientes dizem sobre a Saigrene</h1>
      </header>
      <div className="flex items-center justify-center gap-8 mt-[3.75rem] mx-[7.75rem] md:flex-col">

        {
          depoiments.map(depoiment => {
            if (pageDepoiment == 0) {
              if (depoiment.id == 0 || depoiment.id == 1) {
                return (
                  <div className="bg-blue-200 p-8 border border-solid border-blue-200 rounded w-[34rem] h-[273px] md:flex md:jusitify-center md:items-center md:w-[100vw]">
                    <Person size={35} color="#6848c8" className="mb-5 md:mb-0 mr-3" />
                    <p className="text-gray-700 my-5 md:w-[24rem]">{depoiment.comment}</p>
                    <div className="flex items-center text-blue-700 font-bold md:flex-col">
                      <img
                        className="w-[3rem] h-[3rem] rounded-full"
                        src={depoiment.patient.avatarURL} />
                      <h1 className="ml-4">{depoiment.patient.name}</h1>
                    </div>
                  </div>
                )
              }
            }
            else if (pageDepoiment == 1) {
              if (depoiment.id == 2 || depoiment.id == 3) {
                return (
                  <div className="bg-blue-200 p-8 border border-solid border-blue-200 rounded w-[34rem] h-[273px] md:flex md:jusitify-center md:items-center md:w-[100vw]">
                  <Person size={35} color="#6848c8" className="mb-5 md:mb-0 mr-3" />
                  <p className="text-gray-700 my-5 md:w-[24rem]">{depoiment.comment}</p>
                  <div className="flex items-center text-blue-700 font-bold md:flex-col">
                    <img
                      className="w-[3rem] h-[3rem] rounded-full"
                      src={depoiment.patient.avatarURL} />
                    <h1 className="ml-4">{depoiment.patient.name}</h1>
                  </div>
                </div>
                )
              }
            }
            else if (pageDepoiment == 2) {
              if (depoiment.id == 4 || depoiment.id == 5) {
                return (
                  <div className="bg-blue-200 p-8 border border-solid border-blue-200 rounded w-[34rem] h-[273px] md:flex md:jusitify-center md:items-center md:w-[100vw]">
                  <Person size={35} color="#6848c8" className="mb-5 md:mb-0 mr-3" />
                  <p className="text-gray-700 my-5 md:w-[24rem]">{depoiment.comment}</p>
                  <div className="flex items-center text-blue-700 font-bold md:flex-col">
                    <img
                      className="w-[3rem] h-[3rem] rounded-full"
                      src={depoiment.patient.avatarURL} />
                    <h1 className="ml-4">{depoiment.patient.name}</h1>
                  </div>
                </div>
                )
              }
            }
          })
        }

      </div>
      <div className="flex items-center justify-center gap-2 mt-[3.125rem]">
        <a className={`h-4 w-4  rounded-full duration-200 hover:bg-blue-700 ${pageDepoiment == 0 ? 'bg-blue-700' : 'bg-blue-200'}`} onClick={() => {setpageDepoiment(0)}}></a>
        <a className={`h-4 w-4  rounded-full duration-200 hover:bg-blue-700 ${pageDepoiment == 1 ? 'bg-blue-700' : 'bg-blue-200'}`} onClick={() => {setpageDepoiment(1)}}></a>
        <a className={`h-4 w-4  rounded-full duration-200 hover:bg-blue-700 ${pageDepoiment == 2 ? "bg-blue-700" : 'bg-blue-200'}`} onClick={() => {setpageDepoiment(2)}}></a>
      </div>
    </div>
    </Element>
  )
}