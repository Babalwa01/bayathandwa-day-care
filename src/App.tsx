import {
  AboutUs,
  Footer,
  Header,
  OurPrograms,
  Gallery,
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
        <Footer />
      </section>
  );
}

export default App;
