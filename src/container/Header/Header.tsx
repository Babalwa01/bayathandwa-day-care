import "./Header.scss";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import images from "../../constants/images";

const Header = () => {
  return (
    <header id="Home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-heading">
          <h1>
            <span className="purple-text">happy</span>
            <br />
            <span className="green-text">happens</span>
            <br />
            <span className="orange-text">here.</span>
          </h1>
          <p>
            From{" "}
            <span className="purple-text bold-text">
              0 to 5 years old,
            </span>{" "}
            we make early education and day care joyful, engaging and fun so
            children are happy to{" "}
            <span className="blue-text bold-text">learn,</span>{" "}
            <span className="green-text bold-text">play</span> and{" "}
            <span className="purple-text bold-text">grow</span>.
          </p>
          <div className="app__header-see-more">
            <a href="#Our Activities">
              <span className="see-more-span">See our key activities</span>
            </a>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="app__header-image">
          <img src={images.header2} alt="day care elephant" />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
