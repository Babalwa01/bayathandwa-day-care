import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { images } from "../../constants";
import docs from "../../constants/docs";
import "./Gallery.scss";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
  images.gallery08,
  images.gallery09,
  images.gallery10,
  images.gallery11,
  images.gallery12,
];

const Gallery = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === galleryImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? galleryImages.length - 1 : slide - 1);
  };

  return (
    <section id="Gallery" className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h2 className="headtext__cormorant">Gallery</h2>
        <p className="p__opensans">
          See more about our day care centre together with our{" "}
          <span className="blue-text bold-text">effective admnistration </span>
          and activities.
        </p>
        <div className="app__gallery-download">
          <HiDownload />
          <a href={docs.bayathandwadaycare} download="Bayathandwa_Day_Care">
            Download registration info
          </a>
        </div>
      </div>
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {galleryImages.map((galleryImage, index) => (
          <img
            src={galleryImage}
            alt="gallery"
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default Gallery;
