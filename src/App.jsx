import Nav from "./Component/Nav/Nav";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Scroll from "./Component/Scroll/Scroll";
import { Skills } from "./Component/Skills/Skills";
function App() {
  return (
    <>
      <Nav />
      <Scroll />
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
