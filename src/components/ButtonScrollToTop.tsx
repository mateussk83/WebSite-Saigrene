import { animateScroll as scroll } from "react-scroll"
import { ArrowUp } from "phosphor-react";


export function ButtonScrollToTop() {

 return (
  <div className="flex items-center justify-center bg-gray-100 pr-10">
   <a
    onClick={() => scroll.scrollTo(0)}
    className="cursor-pointer animate-bounce border rounded-full drop-shadow-md p-1 flex "
   >
    <ArrowUp size={32} color="#5f3dc4" />
   </a>
  </div>
 )
}