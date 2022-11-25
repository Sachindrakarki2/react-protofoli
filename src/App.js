import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";
import { LayOut } from "./Components/LayOut";
import { Hiro } from "./Components/Hiro";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";
import { TopNav } from "./Components/TopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter variant="danger">
      <Routes>
        <Route path="/" element={<Hiro />}></Route>
        <Route path="/skills" element={<Skill />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
