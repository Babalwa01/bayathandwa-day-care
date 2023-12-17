import "./Testimonial.scss";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mpho Mosia",
    feedback:
      "My child is taken good care of. I am content and satisfied with Bayathandwa Day Care services.",
    color: "#00adef",
  },
  {
    name: "Kholeka Ngqakaza",
    feedback:
      "Ndincoma indlela endamkeleke ngayo. Indawo icocekile. Abantwana bakhathalelekile, bonwebe.",
    color: "#ec008b",
  },
  {
    name: "Refiloe Rakhoi",
    feedback:
      "This is the safest and healthiest place a child can be at. I love the space and how children are treated.",
    color: "#a5cc44",
  },
  {
    name: "Nontlungu Nombewu",
    feedback:
      "iBayathandwa Day Care icocekile inenkathalo kwaye nooTitshala banobubele, bayafundisa, banothando. Ndizive ndonwabile.",
    color: "#FCD800",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timeOut: any = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 11000);
  });

  const slideRight = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      id="Testimonials"
      className="app__testimonials app__flex"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="app__testimonials_container">
        {testimonials.map((testimonial, index) => (
          <div
            className={
              index == current
                ? "app__testimonials_card app__testimonials_card-active"
                : "app__testimonials_card"
            }
            key={`testimonial-${index + 1}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              style={{ color: `${testimonial.color}` }}
            >
              <g
                id="feQuoteLeft0"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g id="feQuoteLeft1" fill="currentColor">
                  <path
                    id="feQuoteLeft2"
                    d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8Zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8Z"
                  />
                </g>
              </g>
            </svg>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
