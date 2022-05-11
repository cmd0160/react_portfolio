import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact_con">
      <div className="row contact_info">
        <h2 className="contact_title">Contact</h2>
        <input type="text" className="text name" placeholder="Name" />
        <input type="text" className="text email" placeholder="Email" />
        <textarea type="text" className="text message" placeholder="Message" />
         <div>        
          <button className="btn btn_submit">Submit</button>
          </div>
      </div>
    </div>
  );
};

export default Contact;
