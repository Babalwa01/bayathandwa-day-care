import "./Header.scss";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <header id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-heading">
          <h1>
            <span className="purple-text">happy</span><br />
            <span className="green-text">happens</span><br />
            <span className="orange-text">here.</span>
          </h1> 
          <p>
            From <span className="purple-text bold-text">Infant through to preschool,</span> we make early
            education and daycare joyful, engaging and fun so children are happy
            to <span className="purple-text bold-text">learn, play and grow.</span>
            <br />
            Our mission is to make a positive difference in the lives of our
            children, their families, and the communities we serve.
          </p>
          <div className="app__header-see-more">
            <a href="#ourPrograms"><span className="see-more-span">See our key activities</span></a>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="app__header-image">
          {/* <img src={images.elephant} alt="day care elephant" /> */}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
