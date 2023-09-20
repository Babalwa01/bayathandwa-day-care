import {
  AboutUs,
  Footer,
  Header,
  OurPrograms,
  Gallery,
  ContactUs,
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
        <Gallery />
        <ContactUs />
        <Footer />
      </section>
  );
}

export default App;
