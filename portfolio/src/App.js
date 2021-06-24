import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education"
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/education" component={Education}  />
          <Route exact path="/about" component={About}  />
          <Route exact path="/projects" component={Projects}  />
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
