import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Process from "./components/Process";
import Footer from "./components/Footer";
import TopFooter from "./components/TopFooter";

function App() {
  return (
    <>
    <Navigation/>
    <Search/>
    
    <Hero/>
    <FAQ/>
    <Process/>
   
   
    <Contact/>
    <TopFooter/>
    <Footer/>
    </>
  );
}

export default App;