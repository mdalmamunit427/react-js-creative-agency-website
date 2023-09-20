import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-[#181818]">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Blogs/>
      <Partners/>
      <Contact/>
      <div className="h-20"></div>
      <Footer/>
    </div>
  );
}

export default App;
