import logo from './logo.svg';
import './styles/App.css';
import './styles/variable.css';


function App() {
  return (
    <div className="App">
      <div className="header">
        <ul className="burger">
          <div className="line">1</div>
          <div className="line">2</div>
          <div className="line">3</div>
        </ul>
      </div>
      <div className="wrap">
        <header className="App-header">
          <h1>Your voice,<br></br>your way, AAC
            <span className='red'>&nbsp;R</span>
            <span className='yellow'>e</span>
            <span className='purple'>i</span>
            <span className='blue'>m</span>
            <span className='green'>a</span>
            <span className='red'>g</span>
            <span className='yellow'>i</span>
            <span className='purple'>n</span>
            <span className='blue'>e</span>
            <span className='green'>d</span>.
          </h1>
          <div className='App-header-links'>
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
          <span>
            <p className='content mg'>Project By: <a href='www.yannicklahti.co.uk'>Yannick Lahti</a></p>
            <p className='attention'>Transform thoughts into eloquent words, shaping boundless communication.</p>
          </span>
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
