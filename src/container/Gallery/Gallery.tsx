import { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { images } from "../../constants";
import docs from "../../constants/docs";
import "./Gallery.scss";

const galleryImages = [
  images.meals,
  images.elephant,
  images.header1,
  images.header2,
  images.clinic,
];

const Gallery = () => {
  const scrollRef = useRef<HTMLInputElement>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current !== null) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <section className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h2 className="headtext__cormorant">Gallery</h2>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis{" "}
          <span className="blue-text bold-text">ipsum turpis elit elit</span>{" "}
          scelerisque egestas mu.
        </p>
        <div className="app__gallery-download">
          <HiDownload />
          <a href={docs.bayathandwadaycare} download="Bayathandwa_Day_Care">
            Download registration info
          </a>
        </div>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((galleryImage, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={galleryImage} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
