import Topbar from "./components/topbar/Topbar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="App">
    <Topbar />
    <div className="section">
      asdasd
      <Introduction />
      <Portfolio />
      <Works />
      <Contact />
    </div>
    </div>
  );
}

export default App;
