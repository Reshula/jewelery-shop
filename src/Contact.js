import MainFooter from "./Footer/MainFooter";
import React, { useState } from "react";
import image from './background.jpg'

const FORM_ENDPOINT = "https://herotofu.com/start"; 

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const inputs = e.target.elements;
      const data = {};
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }
  
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Form response was not ok');
          }
  
          setSubmitted(true);
        })
        .catch((err) => {
          // Submit the form manually
          e.target.submit();
        });
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }
    return (
        <div className="bg-image">
            <img className="contact-pic" src={image}alt="jewelery"/>
             <h2>Contact</h2>
        <form className="field"
          action={"https://herotofu.com/01bf3390-e221-11ee-98e5-47cb1fce1c24"}
          onSubmit={handleSubmit}
          method="POST"
        >
        <div className="field-info">
          <div className="field-input">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div className="field-input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          </div>
          <div className="field-input">
            <input
              type="Phone"
              placeholder="Phone"
              name="Phone"
              required
            />
          </div>
          <div className="field-input">
            <textarea
              placeholder="Your message"
              name="message"
              required
            />
          </div>
          <div className="field-input">
            <button className="submit-button" type="submit">
              Send
            </button>
            </div>
            </form>
      
        <MainFooter/>

        
        </div>
      );
    
    };
export default Contact;