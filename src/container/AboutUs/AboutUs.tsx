import images from "../../constants/images";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section id="About Us" className="app__aboutus">
        <div className="app__aboutus-content_about">
          <h2 className="headtext__cormorant">About <span className="pink-text">Us</span></h2>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices <span className="pink-text bold-text">vulputate posuere tristique.</span> In sed
            odio nec aliquet eu proin mauris et. <br />Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis pharetra adipiscing ultrices
            vulputate <span className="pink-text bold-text">posuere tristique.</span> In sed odio nec aliquet eu proin mauris
            et.
          </p>
        </div>
        <div className="app__aboutus-content_image">
          <img src={images.elephant} alt="about_image" />
        </div>
        <div className="app__aboutus-content_history">
          <h2 className="headtext__cormorant"><span className="pink-text">Our</span> History</h2>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices <span className="pink-text bold-text">vulputate posuere tristique.</span> In sed
            odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
    </section>
  );
};

export default AboutUs;
