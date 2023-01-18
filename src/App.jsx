import Topbar from "./components/topbar/Topbar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.scss";
import {useState} from "react"
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <div className="app">
        
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections ">
      <Introduction />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
    </div>
  );
}

export default App;
