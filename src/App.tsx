import {
  AboutUs,
  Footer,
  Header,
  OurPrograms,
  Testimonials,
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
        <Testimonials />
        <Footer />
      </section>
  );
}

export default App;
