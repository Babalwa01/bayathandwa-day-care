import React from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";

const ContactUs = () => {
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agw8mjj",
        "template_txqbwi5",
        form.current,
        "Q7A4kCQkTcbE9dm6o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();

    setTimeout(() => {
      navigate("/thankyou");
    }, 1000);
  };

  return (
    <section id="Contact Us" className="app__findus flex__center">
      <div className="app__findus-contact">
        <div className="app__findus-contact-content">
          <h2 className="headtext__cormorant">
            Find <span className="purple-text">Us</span>
          </h2>
          <div className="app__wrapper-content">
            <p>
              Dibinkonzo Village (
              <span className="italics-text purple-text bold-text">
                between Herschel and Sterkspruit
              </span>
              )<br />
              Sterkspruit, Eastern Cape, <br className="line-break" /> 9762
            </p>
            <br />
            <p>
              <span className="bold-text">Tel:</span> +27 82 421 9464
            </p>
            <br />
            <p className="bold-text operating-hours">Operating Hours</p>
            <p>
              <span className="bold-text">Mon - Fri:</span> 06:00 - 18:00
            </p>
            <p>
              <span className="bold-text">Sat, Sun, Public Holidays:</span>{" "}
              Closed (Negotiable)
            </p>
          </div>
        </div>
        <div className="app__findus-contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="form-input"
              type="text"
              name="fname"
              id="fname"
              placeholder="Full name"
              required
            />
            <br />
            <input
              className="form-input"
              type="text"
              name="pnumber"
              id="pnumber"
              placeholder="Phone number"
              required
            />
            <br />
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <br />
            <button className="submit-btn" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="app__wrapper_img">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27480.151792066576!2d27.166588321772398!3d-30.57700977991225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8bd9bc19c21ffd%3A0x83d759ba0b4df5ed!2sBayathandwa%20Day%20Care%20Centre!5e0!3m2!1sen!2sza!4v1695236024780!5m2!1sen!2sza"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
