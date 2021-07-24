import React from "react";
import myinfo from "../myinfo";
import Carousel from 'react-bootstrap/Carousel';


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
      src="/images/travel1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/travel2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/travel3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/travel4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

    </div>
  );
}

export default About;