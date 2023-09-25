import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section id="Contact Us" className="app__findus flex__center">
      <div className="app__findus-content">
        <h2 className="headtext__cormorant">Find <span className="purple-text">Us</span></h2>
        <div className="app__wrapper-content">
          <p>
            Dibinkonzo Village (<span className="italics-text purple-text bold-text">between Herschel and Sterkspruit</span>)<br />
            Sterkspruit, Eastern Cape, <br className="line-break" /> 9762
          </p><br />
          <p className="bold-text operating-hours">Contact</p>
          <p><span className="bold-text">Tel:</span> +27 82 421 9464</p>
          <p><span className="bold-text">Email:</span> luciambolekwa56@gmail.com</p><br />
          <p className="bold-text operating-hours">Operating Hours</p>
          <p><span className="bold-text">Mon - Fri:</span> 06:00 - 18:00</p>
          <p><span className="bold-text">Sat - Sun:</span> Closed</p>
        </div>
      </div>
      <div className="app__wrapper_img">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27480.151792066576!2d27.166588321772398!3d-30.57700977991225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8bd9bc19c21ffd%3A0x83d759ba0b4df5ed!2sBayathandwa%20Day%20Care%20Centre!5e0!3m2!1sen!2sza!4v1695236024780!5m2!1sen!2sza" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default ContactUs;