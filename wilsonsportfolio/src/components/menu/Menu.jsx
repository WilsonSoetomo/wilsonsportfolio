import "./menu.scss";

export default function Menu
    ({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#introduction">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
