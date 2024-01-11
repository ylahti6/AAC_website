// import logo from "./logo.svg";
// import gsap from "gsap";

import "./Styling/global.css";
import Navigator from "./Components/Navigator";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import UpdateBoard from "./Components/UpdateBoard";
import IntroBoard from "./Components/IntroBoard";

function Home() {
  return (
    // Main wrap of the page
    <div className="wrap">
      {/* Container */}
      <div className="container">
        <Navigator />
        <Hero />
        <About />
        <div className="content">
        <UpdateBoard />
        {/* <IntroBoard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
