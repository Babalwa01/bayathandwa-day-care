import { AiOutlineArrowRight } from "react-icons/ai";
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
          Bayathandwa Day Care Centre is a registered Non-Profit Organization implementing{" "}
          <span className="pink-text bold-text">
            Early Childhood Development
          </span>{" "}
          from 0 to 5 years. It is registered with the provincial Department of Social
          Development as a partial care centre, and the Department
          of Health for compliance with health standards. It is located at{" "}
          <span className="pink-text bold-text">Dibinkonzo Village</span>, Ward
          11 in Sterkspruit, Senqu Sub-District, Joe Gqabi District in the
          Eastern Cape.
        </p>
        <div className="app__aboutus-content_history-gallery">
          <a href="#Gallery">
            <span className="gallery-span">See gallery</span>
          </a>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="app__aboutus-content_image">
        <img src={images.elephant} alt="about_image" />
      </div>
      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">
          <span className="pink-text">Our</span> History
        </h2>
        <p className="p__opensans">
          Bayathandwa Day Care Centre was founded by Mrs. Nomsindisi Lucia
          Mbolekwa in 2017 and continues to make a{" "}
          <span className="pink-text bold-text">positive difference</span> in
          the lives of children through the support of the Sterkspruit
          community, the Department of Education, the Department of Social
          Development, the Department of Health, the Department of Labour, and
          the Local Municipality. It receives donations from the National
          Lotteries Commission and Shoprite stores.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
