import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_y720ptp", "template_4cnjlve", e.target, "yKUsgUHR2JkDvk2eP")
      .then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <div className="container contact_con">
      <div className="row">
        <h2 className="contact_title">Contact</h2>
        <form onSubmit={sendEmail} className="">
          <input type="text" className="text name" placeholder="Name" name="name" />
          <input type="text" className="text email" placeholder="Email Address" name="email" />
          <input type="text" className="text subject" placeholder="Subject" name="subject"  />
          <textarea type="text" className="text message" placeholder="Message"name="message" />
          <div>
            <button className="btn btn_submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
