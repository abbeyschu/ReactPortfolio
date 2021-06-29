import React from "react";
import myinfo from "../myinfo"


function About() {
  return (
    <div>
        <h2>About</h2>
        <p>Hello! My name is Abbey Schueller.</p>
        <p>I am currently based in Seattle, Washington where I work to make the world more energy efficient. I am just at the beginning of my career in web design and can't wait to learn more! Check back to watch my portfolio of work grow and improve. </p>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={myinfo.imageOne} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={myinfo.imageTwo} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={myinfo.imageThree} className="d-block w-100" alt="..."/>
            </div>
        </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
  );
}

export default About;