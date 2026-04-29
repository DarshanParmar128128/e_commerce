import React from "react";
import "../styless/contectstyle.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button type="button">Send</button>
      </form>
    </div>
  );
}

export default Contact;