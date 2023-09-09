import {
  AboutUs,
  Footer,
  Header,
  OurPrograms,
  Testimonial,
} from "./container";
import { Navbar } from "./components";
import './App.scss';

function App() {
  return (
      <section className="app">
        <Navbar />
        <Header />
        <AboutUs />
        <OurPrograms />
        <Testimonial />
        <Footer />
      </section>
  );
}

export default App;
