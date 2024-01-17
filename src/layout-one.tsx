import React, { Component, RefObject } from "react";
import TypeWriterEffect from "./components/typewriter/typewriter";
import SocialsView from "./components/socials/socials";
import ProjectsView from "./views/projects";
import WaterView from "./views/water";
import ProgressView from "./views/progress";
import Vic10usLogo from './components/logos/vic10us-logo';
// import Vic10usLogo from "jsx:./assets/images/vic10us-logo.svg";
// import LogoTwo from 'jsx:./assets/images/vic10us-logo.svg';
// import NeonButton from './components/neon-button';
// import RainbowCircle from "./components/rainbow-circle/rainbow-circle";

class LayoutOne extends Component {
  
  private myRef: RefObject<HTMLAnchorElement>;
  private navSocials: RefObject<HTMLAnchorElement>;

  texts: string[] = [
    "Engineer^250.^250.^250.^250",
    "Streamer^250.^250.^250.",
    "DIY-er^250.^250.^250.",
  ];

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.navSocials = React.createRef();
  }

  doRipple = (e: MouseEvent, element: HTMLElement) => {
    if(e.target != element) {
        return;
    }
    const circle = document.createElement("span");
    console.log(element);
    const rect = element.getBoundingClientRect();
    element.style.isolation = "isolate";
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    circle.style.position = "absolute";
    circle.style.zIndex = "-10";
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (element.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (element.offsetTop + radius)}px`;
    circle.classList.add("pulse");
    element.appendChild(circle);
    circle.addEventListener('animationend', () => {
      // element.removeChild(circle);
    });
  };

  addRipple(element: HTMLElement) {
    element.addEventListener('click', (e) => {
      this.doRipple(e, element);
    });
  }

  componentDidMount() {
    // const element: HTMLElement = this.#myRef.current;
    this.addRipple(this.myRef.current as HTMLElement);
    this.addRipple(this.navSocials.current as HTMLElement);
  }

  openMenu = () => {
    // do something eventually
    console.log("Opening menu");
    return false;
  };

  render() {
    return (
      <main id="home">
        <div className="nav-container">
          <div className="nav-background"></div>
          <div className="nav-border"></div>
          <nav>
            <h1 id="logo">
              <a href="#home">vic10us</a>
            </h1>
            <label id="nav-toggle-label" htmlFor="nav-toggle">
              <i className="fa fa-bars"></i>
            </label>
            <input id="nav-toggle" type="checkbox" className="nav-toggle" />
            <ul>
              {/* <li>
                <a className="nav__about" href="#about">
                  About Me
                </a>
              </li> */}
              <li>
                <a ref={this.myRef} className="nav__projects" href="#projects">
                  Component Playground
                </a>
              </li>
              {/* <li>
                <NeonButton label="About Me" color="neonpink" href="#about" />
              </li>
              <li>
                <NeonButton label="Projects" color="green" href="#projects" />
              </li> */}
              {/*}
              <li>
                <NeonButton label="Socials" color="blue" href="#socials" />
              </li> */}
              <li>
                <a ref={this.navSocials} className="nav__socials" href="#socials">
                  Socials
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="home">
          <div className="showcase">
            <h2>vic10us</h2>
            {/* <div className="showcase__img__shadow"></div> */}
            <div className="showcase__img">
              <Vic10usLogo />
              {/* <img src={vic10usLogo} alt="vic10us" /> */}
            </div>
            {/* <div className="img"></div> */}
            <div className="info">
              {/* <RainbowCircle /> */}
              <h3>
                <TypeWriterEffect
                  prompt="> "
                  texts={this.texts}
                  cursor="▋"
                  loop={true}
                />
              </h3>
              <p>
                quasi-polygot/jack-of-all-trades that builds things with tech,
                but mostly I try to help others build their own things
              </p>
            </div>
          </div>
        </section>
        {/* <section id="about" className="about">
          <div className="about__container">More to come</div>
        </section> */}
        {/* <section id="projects" className="projects">
          <div className="projects__container">More to come</div>
        </section> */}
        <section id="projects" className="projects-view">
          <ProjectsView />
        </section>
        <section id="water" className="water-view">
          <WaterView text="Water!" color="hsl(199, 100%, 50%)" />
        </section>
        <section id="progress" className="progress-view">
          <ProgressView />
        </section>
        <section id="socials" className="socials">
          <SocialsView />
        </section>
      </main>
    );
  }
}

export default LayoutOne;
