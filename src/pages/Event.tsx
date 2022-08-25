import { useEffect, useState } from "react";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { ButtonScrollToTop } from "../components/ButtonScrollToTop";
import { Contact } from "../components/Contact";
import { Depoiments } from "../components/Depoiments";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Navigation } from "../components/Navigation";
import { Services } from "../components/Services";

export function Event () {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (

    <div>
      
      <div id="header"  className="after:content-[''] after:flex after:mb-20" >
        <Navigation valueScrollY={scrollY}/>
        </div>
        <div id="content">
        <Home/>
        <Services />
        <Depoiments />
        <Banner />
        <About />
        <Contact />
        <ButtonScrollToTop/>
        <Footer />
        </div>
        </div>
  )
}