import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#introduction" className="logo">
            Wilson.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 949 665 9443</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>soetomowilson@gmail.com</span>
          </div>
          {/* <a href="#contact">contact</a>
                <a href="#works">works</a>
                <a href="#portfolio">portfolio</a> */}
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
