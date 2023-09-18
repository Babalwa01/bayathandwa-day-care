import { motion } from "framer-motion";
import { images } from "../../constants";
import "./OurPrograms.scss";

const activities = [
  {
    title: "Stimulation and developmental activities",
    image: images.header1,
  },
  {
    title: "Primary health care activities from local clinic, and Hygiene",
    image: images.clinic,
  },
  {
    title: "Provision of nutritional meals three times a day",
    image: images.meals,
  },
  {
    title: "Transportation of children to and from homes",
    image: images.transport,
  },
];

const OurPrograms = () => {
  return (
    <section id="Our Activities" className="app__activities-main">
      <h2>
        Our <span className="green-text">Key Activities</span>
      </h2>
      <p>
        Children love learning and playing, so we provide quality and effective
        early education, while promoting growth in a{" "}
        <span className="green-text bold-text">safe, healthy and happy environment.</span>
      </p>
      <div className="app__activities">
        {activities.map((activity, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__activities-item"
            key={activity.title + index}
          >
            <img src={activity.image} alt={activity.title} />
            <p className="p-text" style={{ marginTop: 10 }}>
              {activity.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
