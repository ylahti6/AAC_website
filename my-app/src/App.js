// import logo from "./logo.svg";
// import gsap from "gsap";

import "./Styling/global.css";
import Navigator from "./Components/Navigator";
import Hero from "./Components/Hero";
import AboutBaord from "./Components/AboutBoard";
import Footer from "./Components/Footer";
import UpdateBoard from "./Components/UpdateBoard";

function Home() {
  return (
    // Main wrap of the page
    <div className="wrap">
      {/* Container */}
      <div className="container">
        <Navigator />
        <Hero />
        <AboutBaord />
        <div className="content">
        <UpdateBoard />
        {/* <IntroBoard /> */}
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
