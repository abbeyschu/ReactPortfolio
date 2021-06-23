import React from "react";
import myinfo from "../myinfo"


function Contact() {
  return (
    <div>
       <h2>Contact Me!</h2>
       <div>Phone{myinfo.contact.phone} </div>
       <div>Email{myinfo.contact.email} </div>
       <div>Github{myinfo.profileLinks.github} </div>
    </div>
  );
}

export default Contact