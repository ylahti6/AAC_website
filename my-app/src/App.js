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
            Your voice,<br></br>your way, AAC
            <div className="font-mono">Reimagined.</div>
          </h1>
        </header>
        

        
            
          

        {/* Info section */}
        <div className="flex gap-10 text-gray-600">
          
          {/* Building section */}
          <div className="w-48">
            <p className="text-gray-400 my-6 text-14">Building</p>
            <p>Oratio is a cross-platform AAC app for Android and iOS. With a customizable grid of symbols and words, users tap to generate spoken communication. Its compatibility ensures accessibility on various devices, offering a seamless experience for users

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
        <div className="max-w-2xl my-24">
          <p className="italic text-gray-400 my-6">What is AAC?</p>
          <p>
          AAC stands for Augmentative and Alternative Communication, a set of tools and strategies helping individuals with communication difficulties express themselves. From low-tech options like picture boards to high-tech devices and software, AAC enhances or supplements verbal communication for those with conditions like autism or speech disorders, fostering inclusivity and enabling active participation in various aspects of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
