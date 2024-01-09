import "./Styling/global.css";
import Navigator from "./Components/Navigator";
import Footer from "./Components/Footer";
import react from "react";

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
