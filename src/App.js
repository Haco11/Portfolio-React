import "./App.css";
import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
function App() {
  return (
    <>
      <Nav />
      <Home />

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
