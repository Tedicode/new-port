import tediSlide from "./TediSimplerSlide.png";
import legoTedi from "./LegoTediPic.png";
import githubIcon from "./github-icon.png";
import linkedInIcon from "./linkedIn-icon.png";
import reactLogo from "./tech-icons/react-logo.png";
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
        <a href="https://www.linkedin.com/in/tedilowney">
          <img
            class="top-linked-in-icon"
            height="70px"
            width="70px"
            src={linkedInIcon}
            alt="lego portrait"
          />
        </a>

        <nav class="navbar">
          <ul class="nav-items">
            <li>
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li>
              <a class="nav-link" href="#my-projects">
                Projects
              </a>
            </li>
            <li>
              <a class="nav-link" href="#my-skills">
                Skills
              </a>
            </li>
            <li>
              <a class="nav-link" href="#contact-me">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="grad-slide">
        <img src={legoTedi} alt="graphic" />
        <div class="grad-div">
          {/* <div class="white-div">me</div> */}
          <div class="purple-div">
            <p>Hello, my name is Tedi Lowney.</p>
            <p>
              I'm a full stack software developer with a background in IT and
              Media Studies.
            </p>
          </div>
        </div>
      </div>

      <div id="divider"></div>
      <main class="main">
        {/* <section id="about-me">
          <h2>About Me</h2>
          <div class="container-about-paragraphs">
            <img src={profilePic} alt="profile pic" class="profile-pic" />
            <p class="paragraph-about-me">
              Hello, I am a full stack software developer with a background in
              Information Technology and Media Studies.
            </p>
            <p>
              I trained in front-end and back-end JavaScript development at
              Fullstack Academy. Prior to my shift into software engineering I
              worked in IT, both for a large healthcare system and in an
              educational setting.{" "}
            </p>
            <p>
              I enjoy creative and social subjects as much as I do technology.
              As these forces are ever more entwined, I look forward to building
              upon the tech stack I've learned at bootcamp and discovering new
              directions in technology.
            </p>
          </div>
        </section> */}

        <section id="my-projects">
          <h2>My Projects</h2>
          <a href="https://github.com/cs-team-02/neighbor-fave">
            <div class="project neighbor-fave">
              <h3>NeighborFave</h3>
              <p>
                A full-stack progressive web app for neighbors exchanging favors
                and chat. Our capstone project at FSA
              </p>
            </div>
          </a>
          <a href="https://graceshopper-chocolates.herokuapp.com/">
            <div class="project chocolatier">
              <h3>Chocolatier</h3>
              <p>An E-commerce site for chocolates. A Team project at FSA</p>
            </div>
          </a>

          <a href="https://www.artpal.com/FunPaint">
            <div class="project art">
              <h3>Art</h3>
              <p>My Origial Canvas Paintings</p>
            </div>
          </a>

          <a href="https://cyberoptimism.weebly.com">
            <div class="project blog">
              <h3>Blog</h3>
              <p>
                Internet governance, digital wellness, presence research, and
                other topics in new media
              </p>
            </div>
          </a>
        </section>

        <section id="my-skills">
          <h2>My Skills</h2>
          <div class="skills-div">
            <div>
              <img
                src={reactLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src={reactLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src={reactLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>React</p>
            </div>
          </div>
        </section>

        <section id="contact-me">
          <h2>Contact me</h2>
          <div className="contact-div">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/tedilowney"
            >
              <img src={linkedInIcon} height="100px" width="100px" />
            </a>
            <a className="contact-link" href="https://github.com/Tedicode">
              <img src={githubIcon} height="100px" width="100px" />
            </a>
            <p>tmlowney1@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
