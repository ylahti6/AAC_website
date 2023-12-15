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
          <div className="nav">
            <SlGhost className='icon'/>
            <SlSocialGithub className='icon'/>
          </div>
          <div className='bigfont'>
            <h1>navs</h1>
          </div>

          <div className='nav-bottom'>
            <p>Quirky Styling</p>
            <p>Made simple</p>
          </div>
        </header>

        <div className='App-content'>
        {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}

        </div>

        <div className='footer'>
          <p>Made by <a href='www.yannicklahti.co.uk'>Yannick.</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
