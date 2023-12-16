import logo from './logo.svg';
import './styles/App.css';
import './styles/variable.css';
import Card from './content/Components/Card';
import box1 from './images/box1.png';
import box2 from './images/box2.png';
import box3 from './images/box3.png';
import { SlSocialGithub, SlHome, SlGhost } from 'react-icons/sl';

function App() {
  const backgroundImageUrl = 'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff0700&color2=%233d9fdb&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.4&uTime=0&wireframe=false';
  const projects = [
    {
      title: "Dropdown Simple",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageSrc: [box1],
      keywords: ["Sass", "Scss"],
    },

    {
      title: "Pop Up",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imageSrc: [box2],
      keywords: ["React.js", "Scss"],
    },
    {
      title: "IT GIRL Theme (Blog)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: [box3],
      keywords: ["React.js","SCSS", "Blog",],
    },
  ]
  return (
    <div className="App">
      <div className="wrap">
        <header className="App-header">
          <h1>Your voice, your way, AAC 
            <span className='red'>&nbsp;R</span>
            <span className='yellow'>e</span>
            <span className='purple'>i</span>
            <span className='blue'>m</span>
            <span className='green'>a</span>
            <span className='red'>g</span>
            <span className='yellow'>i</span>
            <span className='purple'>n</span>
            <span className='blue'>e</span>
            <span className='green'>d</span>
          </h1>
          <div className='nav-bottom'>
            <p className='link preview'>Preview</p>
            <p className='link learnMore'>Learn More</p>
          </div>
        </header>
      
        <h2>Empowering communication effortlessly—our AAC app not only simplifies accessibility for all but also offers a cost-effective solution, ensuring that everyone has the means to express themselves with ease and affordability.</h2>

        {/* <div className='App-content'>
        {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
        </div> */}

        <div className='footer'>
          <div className='project'>
          <p className='content mg'>Project By: <a href='www.yannicklahti.co.uk'>Yannick Lahti</a></p>
          <p className='attention'>Transform thoughts into eloquent words, shaping boundless communication.</p>
          </div>
          <div className='feedback'>
            <p className='mg'>Support and Feedback</p>
            <p className='attention'>contact@liberaac.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
