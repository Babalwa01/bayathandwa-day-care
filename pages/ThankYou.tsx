import React from "react";
import "./ThankYou.scss";
import images from "../src/constants/images";

const ThankYou = () => {
  return (
    <main className="app__thankyou">
      <div className="app__thankyou-logo">
        <img src={images.logo} alt="Bayathandwa Day Care" />
      </div>
      <div className="app__thankyou-container">
        <h1>Thank you for contacting Bayathandwa Day Care Centre!</h1>
        <p>
          We will get back to you as soon as we receive your message.
        </p>
        <div className="app__thankyou-homepage">
          <a href="https://www.bayathandwadaycare.org">
            Go back to Homepage
          </a>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
