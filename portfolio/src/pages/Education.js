import React from "react";


function Education() {
  return (
    <div>
    <section className="education">
      <h2 className="school">Education</h2>
      <div className="school">
      <p>University of Wisconsin - Madison</p>
      <p>Bachelors of Science, Food Science</p>
      <p>2017</p>
      </div>
      <div className="school">
      <p>University of Washington</p>
      <p>Coding Bootcamp</p>
      <p>2021</p>
      </div>
    </section>

    <section className="professional">
      <h2 className="workInfo">Professional Experience</h2>
      <div className="workInfo">
        <p className="company">Franklin Energy Services</p>
        <p className="job">Software Quality Analyst (2021-present)</p>
        <p className="job">Operations Analyst, Central Engineering (2017-2021)</p>
        <p className="job">Central Engineering Intern (2014-2017)</p>
      </div>

    </section>

    </div>
  );
}

export default Education 