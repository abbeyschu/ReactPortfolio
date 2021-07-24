import React from "react";
import myinfo from "../myinfo";
import Carousel from 'react-bootstrap/Carousel';
// import travel1 from "/images/travel1.jpg";
// import travel2 from "/images/travel2.jpg";
// import travel3 from "/images/travel3.jpg";
// import travel4 from "/images/travel4.jpg";

function About() {
  return (
    <div>
      <div className="about">
        <p>Hello! My name is Abbey Schueller.</p>
        <p>I am currently based in Seattle, Washington where I work to make the world more energy efficient. I am just at the beginning of my career in web design and can't wait to learn more! Check back to watch my portfolio of work grow and improve. </p>
      </div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ReactPortfolio/images/travel1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ReactPortfolio/images/travel2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ReactPortfolio/images/travel3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ReactPortfolio/images/travel4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

    </div>
  );
}

export default About;