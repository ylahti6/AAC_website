import logo from "./logo.svg";
import "./Styling/global.css";

function App() {
  return (
    // Main wrap of the page
    <div className="wrap">
      {/* Container */}
      <div className="container">
        {/* Hero section */}
        <div className="nav">
          <div className="links">
          <a href="#">Oratio</a>
          <span>
            <a href="#">Learn more</a>
            <a href="#">Download</a>
          </span>
          </div>
        </div>
        <div className="hero">
          <h1>
            Your voice,<br></br>your way, AAC<br></br>
            <span className="code">Reimagined.</span>
          </h1>
        </div>

        {/* Info section */}
        <div className="flex gap-10 text-gray-600">
          {/* Building section */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Building</p>
            <p>
              Oratio is a cross-platform AAC app for Android and iOS. With a
              customizable grid of symbols and words, users tap to generate
              spoken communication. Its compatibility ensures accessibility on
              various devices, offering a seamless experience for users
            </p>
          </div>

          {/* Updates within the app */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Updates</p>
            <p>
              The latest Oratio AAC app update introduces color-coded categories
              for a visually streamlined and user-friendly experience on both
              Android and iOS platforms.
            </p>
          </div>

          {/* Contact section */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Contact</p>
            <p>Project By: Yannick Lahti</p>
          </div>
        </div>
        <div className="max-w-2xl my-24">
          <p className="italic text-gray-400 my-6">What is AAC?</p>
          <p>
            AAC stands for Augmentative and Alternative Communication, a set of
            tools and strategies helping individuals with communication
            difficulties express themselves. From low-tech options like picture
            boards to high-tech devices and software, AAC enhances or
            supplements verbal communication for those with conditions like
            autism or speech disorders, fostering inclusivity and enabling
            active participation in various aspects of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
