import logo from "./logo.svg";
import gsap from "gsap";
import "./Styling/global.css";
import Navigator from "./Components/Navigator";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import UpdateBoard from "./Components/UpdateBoard";
import IntroBoard from "./Components/IntroBoard";
import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    gsap.to("ta", {
      duration: 1, x: 100, opacity: 0.5
    });
  }, []);
}

function App() {
  return (
    // Main wrap of the page
    <div className="wrap">
      {/* Container */}
      <div className="container">

        {/* Imported navigator from components folder */}
        <Navigator />

        {/* Hero section */}
        <Hero />

        {/* Info section */}
        <div className="content">
        <UpdateBoard />
        <IntroBoard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
