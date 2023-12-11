import logo from './logo.svg';
import './styles/App.css';
import './styles/variable.css';
import { SlSocialGithub, SlHome, SlGhost } from 'react-icons/sl'

function App() {
  // const projects = [
  //   {
  //     title: "Libernotes",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     imageSrc: [Fonts],
  //     keywords: ["React.js", "Scss"],
  //   },
  //   {
  //     title: "IT GIRL Theme (Blog)",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     imageSrc: [Fonts],
  //     keywords: ["React.js","SCSS", "Blog",],
  //   },
  //   {
  //     title: "Testing C# Game",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     imageSrc: [Fonts],
  //     keywords: ["React.js", "Sass"],
  //   },
  //   {
  //     title: "FullBoost",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     keywords: ["React.js", "Sass"],
  //     imageSrc: [Fonts],
  //   }
  // ]
  return (
    <div className="App">
      <div className="wrap">
        <header className="App-header">
          <div className="nav">
            <SlGhost className='icon'/>
            <SlSocialGithub className='icon'/>
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>navs</h1>

          <div className='nav-bottom'>
            <p>High-quality navigation styling for your site. Made By Yannick.</p>
            <p>4 Patterns</p>
          </div>
        </header>

        {/* <div className='App-content'>
        {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))} */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
