import { Routes, Route } from "react-router-dom";
import { ThankYou } from "./container";
import MainPage from "./MainPage/MainPage";
import "./App.scss";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </section>
  );
}

export default App;
