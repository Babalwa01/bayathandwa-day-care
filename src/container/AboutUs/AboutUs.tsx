import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import images from "../../constants/images";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section id="About Us" className="app__aboutus">
      <motion.div className="app__aboutus-info">
        <div className="app__aboutus-about">
          <h2>
            About <span className="pink-text">Us</span>
          </h2>
          <p>
            Bayathandwa Day Care is a registered Non-Profit Organization
            implementing{" "}
            <span className="pink-text bold-text">
              Early Childhood Development
            </span>{" "}
            from 0 to 5 years. It was founded by Mrs. Lucia Mbolekwa in 2015 and
            is located at{" "}
            <span className="pink-text bold-text">Dibinkonzo Village</span>,
            Ward 11 in Sterkspruit,{" "}
            <span className="pink-text bold-text">Eastern Cape</span>.
          </p>
          <div className="app__aboutus-gallery">
            <a href="#Gallery">
              <span className="gallery-span">See gallery</span>
            </a>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="app__aboutus-image">
          <img src={images.about01} alt="Bayathandwa day care" />
        </div>
      </motion.div>
      <div className="app__aboutus-line"></div>
      <div className="app__aboutus-history">
        <div className="app__aboutus-history-image">
          <img src={images.about02} alt="Bayathandwa day care" />
        </div>
        <div className="app__aboutus-history-info">
          <h3>Our <span className="pink-text">Background</span></h3>
          <p className="p__opensans">
            Bayathandwa is registered with the provincial Department of Social
            Development as a{" "}
            <span className="pink-text bold-text">partial care centre</span>,
            and the Department of Health for compliance with health standards.
            <br /> <br />
            Through the{" "}
            <span className="pink-text bold-text">continued support</span> of
            the Sterkspruit community, the Local municipality, National
            Lotteries Commission, Shoprite stores, the Departments of Education,
            Social Development, Health, and Labour, we continue to make a{" "}
            <span className="pink-text bold-text">positive difference</span> in
            the lives of children.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
