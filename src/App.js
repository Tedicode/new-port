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
import NFpic from "./NeighborFavePicWide.png";
import Chocpic from "./ChocolatierImage.png";
import BrrEmoji from "./BrrEmoji.jpg";
import blogPic from "./PicOfBlogCyberOptimism.png";
import RpplPic from "./Rppl-screenshot.png";
import "./App.css";

function App() {
  return (
    <div className="App">
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
            Hello, welcome to my portfolio page. My name is Tedi and I’m a full
            stack React/Node developer with a background in IT and Media
            Studies.
          </p>

          <p class="my-paragraph">
            I trained in full stack JavaScript development at the Fullstack
            Academy. See my team's capstone project, {""}
            <a
              className="link-to-NF"
              href="https://github.com/cs-team-02/neighbor-fave"
            >
              NeighborFave
            </a>{" "}
            here!
          </p>
          <p class="my-paragraph">
            At the #TakeHaction2022 Hackathon for Social Good at ADA Developers
            Academy, we made{" "}
            <a
              href="https://github.com/k-dodsonknapp/ada-Accessibility-App"
              className="link-to-NF"
            >
              Rppl
            </a>
            , a tracking app for mental health, and here's the{" "}
            <a
              href="https://www.youtube.com/watch?time_continue=1&v=k7h5RS23L6k&feature=emb_logo"
              className="link-to-NF"
            >
              {" "}
              video{" "}
            </a>{" "}
            pitch.
          </p>
          <p class="my-paragraph">
            I am currently exploring GraphQL, NextJS and TypeScript, and I can’t
            wait to learn more as a developer, building for the web, apps and
            microservices within larger systems. It will be a bonus to work
            within a tech company that aims to improve some corner of our world
            - to be cleaner, safer, more efficient, or more fun!
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
                <small>Capstone Project at FSA</small>
                <img src={NFpic}></img>
              </div>
            </a>
            <a href="https://grace-shopper-chocolates.onrender.com/products">
              <div class="project chocolatier">
                <h3>Chocolatier</h3>
                <p>
                  An E-commerce site for chocolates, a full stack application{" "}
                </p>
                <small>Team Project at FSA</small>
                <img src={Chocpic}></img>
              </div>
            </a>
          </div>
          <div class="non-web-projects project-sub-div">
            {" "}
            {/* <a href="https://www.artpal.com/FunPaint">
              <div class="project art">
                <h3>Art</h3>
                <p>My Origial Canvas Paintings</p>
                <img src={BrrEmoji}></img>
              </div>
            </a>
             */}
            <a href="https://github.com/k-dodsonknapp/ada-Accessibility-App">
              <div class="project rppl">
                <h3>Rppl</h3>
                <p>A Tracking App for Mental Health</p>
                <img src={RpplPic}></img>
              </div>
            </a>
            <a href="https://cyberoptimism.weebly.com">
              <div class="project blog">
                <h3>Blog</h3>
                <p>
                  Internet governance, digital wellness, presence research, and
                  other topics
                </p>

                <small>Blog of Media Studies</small>
                <img src={blogPic}></img>
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
