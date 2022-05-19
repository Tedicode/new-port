import tediSlide from "./TediSimplerSlide.png";
import legoTedi from "./LegoTediPic.png";
import githubIcon from "./github-icon.png";
import linkedInIcon from "./linkedIn-icon.png";
import javascriptLogo from "./tech-icons/javascript-logo.png";
import reactLogo from "./tech-icons/react-logo.png";
import reduxLogo from "./tech-icons/redux-logo.png";
import expressLogo from "./tech-icons/express-logo.png";
import sequelizeLogo from "./tech-icons/sequelize-logo.png";
import postgressLogo from "./tech-icons/postgres-logo.png";
import nodeLogo from "./tech-icons/node-logo.png";
import htmlLogo from "./tech-icons/html-logo.png";
import cssLogo from "./tech-icons/css-logo.png";
import profilePic from "./LegoTediPicCentered.png";
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
            alt="linked in"
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
      {/* <div id="grad-slide">
        <img src={legoTedi} alt="graphic" />
        <div class="grad-div">

          <div class="purple-div">
            <p>Hello, I'm Tedi Lowney.</p>
            <p>
              I'm a full stack software developer with a background in IT and
              Media Studies.
            </p>
          </div>
        </div>
      </div>

      <div id="divider"></div> */}
      <main class="main">
        <section id="about-me">
          <div class="container-about">
            <div class="profile-pic">
              {/* <img
                src={profilePic}
                alt="profile pic"
                height="250px"
                width="250px"
                class="profile-pic"
              /> */}
            </div>
            <div class="intro-div">
              <h2 class="my-name">Tedi Lowney</h2>
              <h3 class="my-title">Fullstack Software Developer</h3>
            </div>
          </div>
          <p class="my-paragraph">
            Hello, and thank you for visiting my portfolio page. My name is Tedi
            and I’m a software developer with a background in IT and Media
            Studies.
          </p>

          <p class="my-paragraph">
            I trained in full stack JavaScript development at the Fullstack
            Academy bootcamp. Here we learned to build RESTful APIs with the
            Express framework and Postgres databases, with Sequelize as the ORM
            of choice. We learned React and Redux on the front end, building
            components and quickly learning the importance of having a system
            for state management. In the first six weeks I learned the PERN
            stack and built a simple CRUD app. By the end of bootcamp, my
            capstone team conceived, designed and built {""}
            <a
              className="link-to-NF"
              href="https://github.com/cs-team-02/neighbor-fave"
            >
              NeighborFave
            </a>
            , a full stack progressive web app, downloadable on mobile and
            desktop, in just twenty days.
          </p>
          <p class="my-paragraph">
            I can’t wait to learn more as a developer, building for the web,
            apps and microservices within larger systems. It will be a bonus to
            work within a tech company that aims to improve some corner of our
            world - to be cleaner, safer, more efficient, or more fun!
          </p>
        </section>

        <section id="my-projects">
          <h2>Projects </h2>

          <div class="web-projects project-sub-div">
            {" "}
            <a href="https://github.com/cs-team-02/neighbor-fave">
              <div class="project neighbor-fave">
                <h3>NeighborFave</h3>
                <p>
                  A full-stack progressive web app for neighbors exchanging
                  favors and chat
                </p>
                <small>Capstone project at FSA</small>
              </div>
            </a>
            <a href="https://graceshopper-chocolates.herokuapp.com/">
              <div class="project chocolatier">
                <h3>Chocolatier</h3>
                <p>
                  An E-commerce site for chocolates, a full stack application{" "}
                </p>
                <small>Team project at FSA</small>
              </div>
            </a>
          </div>
          <div class="non-web-projects project-sub-div">
            {" "}
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
                  other topics
                </p>

                <small>
                  College blog of observations while majoring in Media Studies
                </small>
              </div>
            </a>
          </div>
        </section>

        <section id="my-skills">
          <h2>Skills </h2>
          <div class="skills-div">
            <div class="single-skill-div">
              <img
                src={javascriptLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>JavaScript</p>
            </div>
            <div class="single-skill-div">
              <img
                src={reactLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>React</p>
            </div>
            <div class="single-skill-div">
              <img
                src={reduxLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>Redux</p>
            </div>
            <div class="single-skill-div">
              <img
                src={nodeLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>Node.js</p>
            </div>
            <div class="single-skill-div">
              <img
                src={htmlLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>HTML5</p>
            </div>
            <div class="single-skill-div">
              <img
                src={cssLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>CSS3</p>
            </div>
            <div class="single-skill-div">
              <img
                src={expressLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>Express</p>
            </div>
            <div class="single-skill-div">
              <img
                src={sequelizeLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>Sequelize</p>
            </div>
            <div class="single-skill-div">
              <img
                src={postgressLogo}
                height="100px"
                width="100px"
                alt="react logo"
              />
              <p>PostgreSQL</p>
            </div>
          </div>
        </section>

        <section id="contact-me">
          <h2> &lt; Contact me &gt;</h2>
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
            <a className="contact-link" href="mailto:tmlowney1@gmail.com?">
              <p>tmlowney1@gmail.com</p>
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">{/* <p>Thank you for visiting!</p> */}</footer>
    </div>
  );
}

export default App;
