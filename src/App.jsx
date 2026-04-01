import { useEffect } from "react";
import "./App.css";
import "./styles/global.css";
import Navbar from "./pages/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.body.classList.add(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Intro />
      <About />
      <Education />
      <Publications />
      <Work />
      <Contact />
    </div>
  );
}

export default App;