import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import { Skills } from "./component/Skills/Skills";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
