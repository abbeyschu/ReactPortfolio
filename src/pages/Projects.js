import React from "react";
import myinfo from "../myinfo";


function Projects() {
  return (
    <div className="projects">
    <h2>Work</h2>
       {myinfo.portfolio.map((item)=>{
           return(
            <section key={item.id} className="projectSection">
                <img key={item.alt} src={item.image} alt="" className="projectPic"/>
                <div className="projectInfo">
                    <h3 key={item.title}>{item.title}</h3>
                    <div className="description" key={item.description}>{item.description}</div>
                    <div><a key={item.githubLink} href={item.githubLink}>Github Repository</a></div>
                    <div><a key={item.deployed} href={item.deployed}>Deployed Link</a></div>
                </div>
            </section>
           )
       })}
    </div>
  );
}

export default Projects