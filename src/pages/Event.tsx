import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { ButtonScrollToTop } from "../components/ButtonScrollToTop";
import { Contact } from "../components/Contact";
import { Depoiments } from "../components/Depoiments";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";
import { Navigation } from "../components/Navigation";
import { Services } from "../components/Services";

export function Event () {
  const [disabled, setDisabled] = useState(0);
  const [offSet, setOffset] = useState(0);

  function handleClickEventDisabled() {
    if(disabled == 0) {
      setDisabled(1)
    }
    else {
      setDisabled(0)
    }
  }

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (

    <div>
      
      <div id="header"  className="after:content-[''] after:flex after:mb-20 md:after:mb-35 " >
        <Navigation valueScrollY={scrollY} disabledComponent={handleClickEventDisabled}/>
        </div>
        <div id="content" className={disabled == 1 ? 'md:hidden' : ''}>
        <Home/>
        <Services />
        <Depoiments />
        <Banner />
        <About />
        <Contact />
        <ButtonScrollToTop/>
        <Footer />
        </div>
        <div className={`hidden${disabled == 1 ? 'md:relative' : ''}`}>
          <Menu numberScrollY={scrollY}/>
        </div>
        </div>
  )
}