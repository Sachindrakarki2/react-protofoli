import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";
import { LayOut } from "./Components/LayOut";
import { Hiro } from "./Components/Hiro";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";
import { TopNav } from "./Components/TopNav";

function App() {
  return (
    <LayOut>
      <div className="wrapper">
        {/* <!-- navbar --> */}
        <TopNav />

        {/* <!-- hero section --> */}
        <Hiro />

        {/* <!-- skills --> */}

        <Skill />

        {/* <!-- projects --> */}
        <Project />

        {/* <!-- about me --> */}
        <AboutMe />

        {/* <!-- contact me --> */}
        <Contact />

        {/* <!-- footer --> */}
      </div>
    </LayOut>
  );
}

export default App;
