import logo from "./logo.svg";

function App() {
  return (
    <div className="min-w-screen flex justify-center">
      <div className="bg-white-500 h-30 fixed">
        <div className="logo"></div>
        <div className="menu"></div>
      </div>

      {/* Main wrap */}
      <div className="max-w-6xl">
        {/* Hero section */}
        <header className="min-h-screen flex items-center justify-center">
          <h1 className="font-serif text-7xl font-extrabold">
            Your voice,<br></br>your way, AAC<br></br>{" "}
            <div className="font-mono">Reimagined.</div>
          </h1>
        </header>

        {/* Info section */}
        <div className="flex gap-10 text-gray-600">
          <div
            className="
          
          "
          >
            <p></p>
          </div>
          {/* Building section */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Building</p>
            <p>
              Empowering communication effortlessly—our AAC app not only
              simplifies accessibility for all but also offers a cost-effective
              solution, ensuring that everyone has the means to express
              themselves with ease and affordability.
            </p>
          </div>

          {/* Updates within the app */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Updates</p>
            <p>
              Find out more about Augmentative and Alternative Communication
              (AAC), and how to support people who cannot rely on speaking.
            </p>
          </div>

          {/* Contact section */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Contact</p>
            <p>Project By: Yannick Lahti</p>
          </div>
        </div>
        <div className="">
          <p className="">Now</p>
        </div>
      </div>
    </div>
  );
}

export default App;
