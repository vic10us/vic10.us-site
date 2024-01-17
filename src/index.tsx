import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { 
  createBrowserRouter, 
  RouterProvider,
  BrowserRouter,
  Routes,
  Route, 
  Outlet, 
  Link,
} from 'react-router-dom';
// import TypeWriterEffect from "./components/typewriter/typewriter";
// import ThreeDeeCard from "./components/3d-card/threedee-card";
import LayoutOne from "./layout-one";
import "./assets/index.scss";
import vic10usLogo from "./assets/images/vic10us-logo.png";
import Resume from './resume';
import Layout from './layout';

class App extends Component {
  state = {};
  text = "";
  cursor = "▋";
  prompt = "root:~#";
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  logo: string = vic10usLogo;
  texts: string[] = [
    // "........~8........~8........~8........~8▁▂▃▄▅▆▇█▇▆▅▄▃▂▁",
    "^250This was^500~1^250~1^250~1^150is^500 the coolest place on the interwebs^250.^250.^250.^250.^250~3 maybe?",
    "........~8........~8........~8........",
    "Wake up, Neo.^1000",
    "^250.^250.^250.^250.",
    "The Matrix has you.^1000",
    "^250.^250.^250.^250.",
    "Follow the white rabbit?^2000",
    "^250Welcome!^250",
  ];


  componentDidMount() {
    // do nothing for now
    console.log('Component loaded');
    window.addEventListener('scroll', this.handleScroll);
  }

  const handleScroll = (e: React.ScrollEvent<HTMLElement>) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    const elements = document.querySelectorAll('.nav-background, .nav-border, #logo');
    const invelements = document.querySelectorAll('.showcase > h2');
    elements.forEach(element => { 
      element.style.opacity = Math.min(scrollTop/(window.innerHeight/4), 1);
    });
    invelements.forEach(element => {
      // 0 = 1
      // window.innerHeight/2 = 0
      console.log();
      element.style.opacity = 1 - Math.min(scrollTop/(window.innerHeight/4), 1);
    });
  };

  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutOne />} />
          <Route path="about" element={<LayoutOne />} />
          <Route path="dashboard" element={<LayoutOne />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<LayoutOne />} />
        </Route>
      </Routes>
    );
  }

  // oldRender() {
  //   return (
  //     <div>
  //       <section className="header-content">
  //         <TypeWriterEffect
  //           prompt={this.prompt}
  //           texts={this.texts}
  //           cursor={this.cursor}
  //         />
  //       </section>
  //       <section>
  //         <div className="rainbow"></div>
  //         &nbsp;
  //       </section>
  //       <section className="flex-across">
  //         <ThreeDeeCard title="Twitch Stream" description="Live streams comming back very soon!" logo={this.logo} link="https://twitch.tv/vic10usx" />
  //         <ThreeDeeCard title="YouTube" description="Videos and Tutorials (sometimes a little extra)" logo={this.logo} />
  //         <ThreeDeeCard title="GitHub" description="Code, projects and examples" logo={this.logo} />
  //       </section>
  //       {/* <section>
  //         <div className="rainbow"></div>
  //         <div className="maincontent">
  //           <div>
  //             <h2>More to Come :)</h2>
  //             <p>
  //               This site will be full of great things... just as soon as I find
  //               the time to write them ;)
  //             </p>
  //           </div>
  //         </div>
  //       </section> */}
  //     </div>
  //   );
  // }
}

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
