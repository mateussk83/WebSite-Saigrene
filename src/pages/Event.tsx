import { useEffect, useState } from "react";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Depoiments } from "../components/Depoiments";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Navigation } from "../components/Navigation";
import { Services } from "../components/Services";
import { Link, animateScroll as scroll } from "react-scroll"

export function Event () {
  const [ scrollY, setScrollY ] = useState(0)
  
  function addEventScroll() {
    setScrollY(window.scrollY)
  }

  return (

    <div onScroll={addEventScroll}>
      
      <div id="header"  className="after:content-[''] after:flex after:mb-20" >
        <Navigation valueScrollY={scrollY}/>
        </div>
        <div id="content">
        <Home
        />
        <Services />
        <Depoiments />
        <Banner />
        <About />
        <Contact />
        <Footer />
        </div>
        </div>
  )
}