import images from "../../constants/images";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section id="About Us" className="app__aboutus">
      <div className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">
          About <span className="pink-text">Us</span>
        </h2>
        <p className="p__opensans">
          Bayathandwa Day Care Centre is a registered Non-Profit Organization
          implementing{" "}
          <span className="pink-text bold-text">
            Early Childhood Development
          </span>{" "}
          from 4 months to 5 years. It is located at Dibinkonzo Village in
          Sterkspruit, Eastern Cape. <br />
          We operate from Monday to Friday from 06:00 to 18:00 and provide{" "}
          <span className="pink-text bold-text">after-care services</span> when
          needed.
        </p>
      </div>
      <div className="app__aboutus-content_image">
        <img src={images.elephant} alt="about_image" />
      </div>
      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">
          <span className="pink-text">Our</span> History
        </h2>
        <p className="p__opensans">
          Bayathandwa Day Care Centre was founded by Lucia Mbolekwa in 2015 and
          continues to make a{" "}
          <span className="pink-text bold-text">positive difference</span> in
          the lives of our children through the support of the Sterkspruit
          community, the Department of Education, the Department of Social
          Development and National Lotteries Commission.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
