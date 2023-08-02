import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Projects/Work";
import Contact from "./Components/Contact";
import Services from "./Components/Services/Services";
import Companies from "./Components/Companies";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Companies />
      <Contact />
    </div>
  );
}

export default App;
