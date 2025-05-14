import Footer from "./components/common/footer";
import Header from "./components/common/header";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";

function App() {
  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
