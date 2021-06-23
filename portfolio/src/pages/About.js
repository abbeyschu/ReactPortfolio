import React from "react";
import myinfo from "../myinfo"


function About() {
  return (
    <div>
        <h2>About</h2>
        <p>Hello! My name is Abbey Schueller.</p>
        <p>I am currently based in Seattle, Washington where I work to make the world more energy efficient. I am just at the beginning of my career in web design and can't wait to learn more! Check back to watch my portfolio of work grow and improve. </p>
        <div className = "travelOne"><img alt="travel" src={myinfo.imageOne}></img></div>
        <div className = "travelTwo"><img alt="travel" src={myinfo.imageTwo}/></div>
        <div className = "travelTwo"><img alt="travel" src={myinfo.imageThree}/></div>
        <div className = "travelFour"><img alt="travel"src={myinfo.imageFour}/></div>
    </div>
  );
}

export default About;