import "./introduction.scss";
import { useEffect, useRef } from "react";

export default function Introduction() {
  const textRef = useRef();
  return (
    <div className='introduction' id="introduction">
      <div className="left">
        <div className="imgContainer">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Portfolio
          </h2>
          <h1>
            Wilson Soetomo
          </h1>
          <h3 ref={textRef}><span></span></h3>
        </div>
        <a href="#portfolio">
        </a>
      </div>
    </div>
  )
}
