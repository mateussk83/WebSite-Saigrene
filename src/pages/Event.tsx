import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Depoiments } from "../components/Depoiments";
import { Home } from "../components/Home";
import { Navigation } from "../components/Navigation";
import { Services } from "../components/Services";

export function Event () {

  return (
    <div>
        <Navigation />
        <Home />
        <Services />
        <Depoiments />
        <About />
        <Contact />
        </div>
  )
}