import gsap from "gsap";
import { useEffect } from "react";

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
        <div className="content">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
