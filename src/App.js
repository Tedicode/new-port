import logo from "./logo.svg";
import profilePic from "./profile-pic.PNG";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <header>My header</header> */}
      <header>
        <nav class="navbar">
          <ul class="nav-items">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#my-projects">Projects</a>
            </li>
            <li>
              <a href="#my-skills">Skills</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      <main class="main">
        <section id="about-me">
          <h2></h2>
          <div class="contain-image-and-paragraph">
            <img src={profilePic} alt="profile pic" class="profile-pic" />
            <p class="paragraph-about-me">
              My name is Tedi Lowney. all about meall about meall about meall
              about meall about meall about meall about meall about meall
              aboutMy name is Tedi Lowney. all about meall about meall about
              meall about meall about meall about meall about meall about meall
              about meall about meall about meall about meall about meall ab
              meall about meall about meall about meall about meall about meall
              about meall about meall about me
            </p>
          </div>
        </section>

        <section id="my-projects">
          <h2>My Projects</h2>
          <div class="project neighbor-fave">
            <h3>NeighborFave</h3>
            <p>
              A full-stack progressive web app for neighbors exchanging favors
              and chat. (Our capstone project at FSA)
            </p>
          </div>
          <div class="project chocolatier">
            <h3>Chocolatier</h3>
            <p>An E-commerce site for chocolates. (A Team project at FSA)</p>
          </div>
          <div class="project art">
            <h3>Art</h3>
            <p>Some of my Canvas Paintings</p>
          </div>
          <div class="project blog">
            <h3>Blog</h3>
            <p>
              Cybergovernance, digital wellness in the information age, and
              various Media topics
            </p>
          </div>
        </section>

        <section id="my-skills">
          <h2>My Skills</h2>my skills here
        </section>

        <section id="contact-me">
          <h2>Contact me</h2>contact stuff here
        </section>
      </main>
    </div>
  );
}

export default App;
