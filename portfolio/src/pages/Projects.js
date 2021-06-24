import React from "react";
import myinfo from "../myinfo"


function Projects() {
  return (
    <div>
       {myinfo.portfolio.map((item)=>{
           return(
            <section className="projectSection">
               <h3>{item.title}</h3>
               <div>{item.description}</div>
               <div>{item.githubLink}</div>
               <div>{item.deployed}</div>
            </section>
           )
       })}
    </div>
  );
}

export default Projects