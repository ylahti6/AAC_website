import logo from "./logo.svg";
import "./Styling/global.css";
import Navigator from "./content/Components/Navigator";
import UpdateBoard from "./content/Components/UpdateBoard";
import IntroBoard from "./content/Components/IntroBoard";

function App() {
  return (
    // Main wrap of the page
    <div className="wrap">
      {/* Container */}
      <div className="container">

        {/* Imported navigator from components folder */}
        <Navigator />

        {/* Hero section */}
        <div className="hero">
          <h1>
            Your voice,<br></br>your way, AAC<br></br>
            <span className="code">Reimagined.</span>
          </h1>
        </div>

        {/* Info section */}
        <div className="content">
        <UpdateBoard />
        <IntroBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
