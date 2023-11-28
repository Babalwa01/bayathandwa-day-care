import {
  AboutUs,
  Footer,
  Header,
  OurPrograms,
  Gallery,
  Testimonial,
  ContactUs,
} from "../container";
import { Navbar } from "../components";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="app">
      <Navbar />
      <Header />
      <AboutUs />
      <OurPrograms />
      <Gallery />
      <Testimonial />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default MainPage;
