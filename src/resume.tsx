import React, { Component, RefObject } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import homeMetaImage from "./assets/images/home-ss.png";
import SocialsView from "./components/socials/socials";

class Resume extends Component {
  
  private navSocials: RefObject<HTMLAnchorElement>;
  
  texts: string[] = [
    "Engineer^250.^250.^250.^250",
    "Streamer^250.^250.^250.",
    "DIY-er^250.^250.^250.",
  ];

  constructor(props: any) {
    super(props);
    this.navSocials = React.createRef();
    this.state = { resume: "" }
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
  }

  addRipple(element: HTMLElement) {
    element.addEventListener('click', (e) => {
      this.doRipple(e, element);
    });
  }

  componentDidMount() {
    this.addRipple(this.navSocials.current as HTMLElement);
    // fetch('https://raw.githubusercontent.com/vic10us/vic10us/main/README.md')
    //   .then((res) => res.text())
    //   .then((text) => {
    //     console.log(text);
    //     this.setState({ resume: text });
    //   });
  }

  openMenu = () => {
    // do something eventually
    console.log("Opening menu");
    return false;
  }

  render() {
    return (
      <main id="home">
        <Helmet>
            <title>IT Maestro and Innovation Alchemist 🎺</title>
            <meta charSet="utf-8" />
            <meta name='description' content="With nearly three decades of triumphs in the ever-evolving landscape of computer engineering, I stand as a seasoned IT virtuoso. My expertise spans solution delivery, development prowess, and unwavering support, with a mastery that extends to large-scale consolidation endeavors, intricate data center choreography, and orchestrating cloud computing symphonies." />
            <meta property="og:type" content="profile" />
            <meta property="og:title" content="IT Maestro and Innovation Alchemist 🎺" />
            <meta property="og:description" content="With nearly three decades of triumphs in the ever-evolving landscape of computer engineering, I stand as a seasoned IT virtuoso. My expertise spans solution delivery, development prowess, and unwavering support, with a mastery that extends to large-scale consolidation endeavors, intricate data center choreography, and orchestrating cloud computing symphonies." />
            <meta property="og:image" content={homeMetaImage} />
            <meta property="og:url" content="https://vic10.us/resume" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://vic10.us/resume" />
            <meta property="twitter:title" content="IT Maestro and Innovation Alchemist 🎺" />
            <meta property="twitter:description" content="With nearly three decades of triumphs in the ever-evolving landscape of computer engineering, I stand as a seasoned IT virtuoso. My expertise spans solution delivery, development prowess, and unwavering support, with a mastery that extends to large-scale consolidation endeavors, intricate data center choreography, and orchestrating cloud computing symphonies." />
            <link rel="canonical" href="https://vic10.us/resume" />
        </Helmet>

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
              <li>
                <a ref={this.navSocials} className="nav__socials" href="#socials">
                  Socials
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="resume">

        <h1 id="it-maestro-and-innovation-alchemist-">IT Maestro and Innovation Alchemist 🎺</h1>
<p>With nearly three decades of triumphs in the ever-evolving landscape of computer engineering, I stand as a seasoned IT virtuoso. My expertise spans solution delivery, development prowess, and unwavering support, with a mastery that extends to large-scale consolidation endeavors, intricate data center choreography, and orchestrating cloud computing symphonies.</p>
<h2 id="a-symphony-of-success-">A Symphony of Success 🎵</h2>
<p>I proudly boast a proven track record of conducting cross-functional teams and spearheading corporate development initiatives from the conceptual overture through the harmonious phases of design, implementation, and ongoing support. My forte includes a deep understanding of Agile methodologies and the rhythmic flow of CI/CD pipelines, with a resume that showcases the seamless integration of DevOps best practices.</p>
<h2 id="the-passionate-maestro-">The Passionate Maestro 🎼</h2>
<p>Beyond the code and algorithms, my true passion lies in coaching and nurturing talent, a commitment aimed at propelling both individual stars and the collective brilliance of teams toward resounding success. In my quest for the next challenge, I am on the lookout for a dynamic role within a forward-thinking company—a stage where I can leverage my seasoned expertise to compose innovative solutions and compose the score for business growth.</p>
<h2 id="the-melody-of-diverse-experience-">The Melody of Diverse Experience 🎶</h2>
<p>Having traversed the corridors of various industries, I bring forth a symphony of experiences and a treasure trove of knowledge. Consider me your adaptable troubadour, ready to leverage this extensive repertoire to ensure the success and harmony of your organization.</p>
<p>In my hands, technology becomes an art form, and every project transforms into a masterpiece. Let&#39;s collaborate to compose the future and create a legacy of innovation.</p>
<h2 id="-fancy-chart-">✨ Fancy chart ✨</h2>
<p><img src="https://raw.githubusercontent.com/vic10us/vic10us/main/skills-2023-12-21-023031.svg" alt="Skills"></p>
<p><em>these are only a few of the things I&#39;m interested in and/or have experience with. I&#39;m always looking to learn new things and expand my horizons. ask me about anything you don&#39;t see here, I may have experience with it or be interested in learning more about it.</em></p>
<h2 id="hobbies-">Hobbies🕹️</h2>
<p>Skiing, Reading, 3D Printing, Electronics, Design and Manufacturing (CNC, Milling etc)</p>
<p>I stream to teach and tell stories on <a href="https://twitch.tv/thisisthevoice">Twitch</a> and <a href="https://www.youtube.com/@thisistherealvoice">YouTube</a></p>
<h2 id="languages-">Languages🥖</h2>
<ul>
<li>English (native)</li>
<li>French (fluent)</li>
</ul>
<h2 id="employment-history-">Employment History📝</h2>
<h3 id="senior-software-engineer-segic-brossard">Senior Software Engineer, Segic, Brossard</h3>
<h4 id="-january-2023-2023-"><em>January 2023 — 2023</em></h4>
<ul>
<li>Responsible for the design and implementation of a new cloud-based SaaS platform.</li>
<li>Helped migrate the existing monolith to a microservices architecture.</li>
<li>Implemented a CI/CD pipeline to improve the delivery process.</li>
<li>Implemented a new event-driven architecture to improve performance and scalability.</li>
<li>Coached and mentored team members on the latest technology standards and best practices to ensure optimal delivery of projects.</li>
</ul>
<h3 id="chief-technology-officer-leadfox-sherbrooke">Chief Technology Officer, Leadfox, Sherbrooke</h3>
<h4 id="-2021-december-2022-"><em>2021 — December 2022</em></h4>
<ul>
<li>Played a key role in scaling the business by 10x through modernization of the technology stack.</li>
<li>Led the transition from NodeJS to .NET C# microservices and implemented an event-driven architecture to optimize performance and scalability.</li>
<li>Built and trained high-performing teams with the addition of highly skilled talent.</li>
<li>Coached and mentored team members on the latest technology standards and best practices to ensure optimal delivery of projects.</li>
</ul>
<h3 id="director-of-operations-tooling-senior-engineer-software-devops-acquisio-web-com-newfold-brossard">Director of Operations Tooling / senior engineer (SOFTWARE/DEVOPS), Acquisio (Web.com / Newfold), Brossard</h3>
<h4 id="-2010-2021-"><em>2010 — 2021</em></h4>
<ul>
<li>Built and nurtured a strong Professional Services team, resulting in improved client satisfaction and repeat business.</li>
<li>Implemented the first complete ETL platform within the organization, streamlining data processing and improving efficiency.</li>
<li>Started the first formal API division and standards committee, establishing best practices and enabling better collaboration across teams.</li>
<li>Started the first internal Algorithms/ML/AI group, advancing the organization&#39;s capabilities in data-driven decision making.</li>
<li>Built a complete usage-based SAS-enabled and pluggable billing system from the ground up, improving accuracy and transparency in billing processes.</li>
<li>Created Dynamo, a small business online marketing enablement platform, to help drive growth and revenue for clients.</li>
<li>Created and led Trading Desk Manager, a display/RTB campaign manager and sales tool for partners and direct SMBs, resulting in increased revenue and improved customer satisfaction.</li>
<li>Designed and implemented an on-site Kubernetes (k8s) infrastructure, enabling better management of containerized applications.</li>
<li>Planned and aided the migration of a core Java distributed monolith to k8s using git-triggered CI/CD, improving scalability and reducing downtime.</li>
</ul>
<h3 id="senior-systems-engineer-architect-aon-giss-montr-al">Senior Systems Engineer/Architect, Aon GISS, Montréal</h3>
<h4 id="-2004-2009-"><em>2004 — 2009</em></h4>
<ul>
<li>Designed and developed solutions to ongoing business challenges, resulting in improved efficiency and productivity.</li>
<li>Maintained critical infrastructure systems, ensuring optimal uptime and availability.</li>
<li>Diagnosed application performance issues through measured tests and responses, working with project/team leads to develop a resolution path.</li>
<li>Analyzed and tested products for potential application and performance enhancements, improving overall system performance.</li>
<li>Planned and executed over 20 Netware to Windows server migrations, successfully transitioning critical systems to new platforms.</li>
<li>Designed and implemented a HA/DRS VMWare ESX infrastructure, ensuring high availability and disaster recovery capabilities for critical applications.</li>
<li>Developed, implemented, and tested multi-site DRS plans employing instant and fully automatic network and system recovery infrastructure for all critical applications and services, ensuring optimal resilience in the event of a disaster.</li>
<li>Planned and executed server consolidation efforts that resulted in a reduction in complexity and cost while improving stability and performance of almost all systems and applications, saving the organization significant resources.</li>
<li>Responsible for technology decisions and research, ensuring alignment with organizational goals and industry best practices.</li>
<li>Responsible for reporting architecture analysis, providing key insights and recommendations to leadership.</li>
<li>Responsible for server installs and patch management, ensuring optimal security and compliance.</li>
<li>Other responsibilities include creating architectural blueprints, supporting internal clients, proof of concept, and creating and presenting roadmaps, demonstrating a well-rounded skillset.</li>
</ul>
<h3 id="it-security-specialist-aon-consulting-montr-al">IT Security Specialist, Aon Consulting, Montréal</h3>
<h4 id="-2003-2004-"><em>2003 — 2004</em></h4>
<p>As an Information Security Specialist, I have extensive experience in evaluating and implementing security technology to protect critical systems and data. My responsibilities have included:</p>
<ul>
<li>Conducting regular vulnerability assessments of internal systems and coordinating remediation efforts with team leaders and business leads</li>
<li>Maintaining information security processes and security control standards for application development and technology deployment</li>
<li>Managing perimeter security and related access controls, including secure remote access solutions such as Client(less) VPN and Citrix/Terminal Services technologies</li>
<li>Coordinating with application teams to develop secure application development processes</li>
<li>Implementing hardware multi-factor authentication to enhance access controls</li>
<li>Supporting internal clients and technicians with security-related issues</li>
<li>Managing network systems such as routers and switches to ensure secure and reliable network connectivity.</li>
</ul>
<h3 id="network-and-communications-specialist-aon-consulting-montr-al">Network and Communications Specialist, Aon Consulting, Montréal</h3>
<h4 id="-1999-2003-"><em>1999 — 2003</em></h4>
<ul>
<li>Successfully managed network infrastructure equipment and implemented a highly redundant network infrastructure to ensure maximum uptime.</li>
<li>Designed and implemented a secure core-site infrastructure to host 24/7 internet services and extranet partner networks.</li>
<li>Implemented Simple Network Management Protocol (SNMP) on network devices for effective network management.</li>
<li>Set up traffic filters using Standard and Extended access-lists, Distribute-Lists, and Route Maps to improve network security and performance.</li>
<li>Developed and implemented a highly segmented VLAN infrastructure for granular network control, distribution, redundancy, and failover.</li>
<li>Responsible for the end-to-end design and implementation of network infrastructure.</li>
<li>Provided technical support to internal clients and technicians for all network-related issues.</li>
</ul>
<h2 id="career-highlights-">Career Highlights🔦</h2>
<ul>
<li>Aided in building one of the most successful online marketing management and reporting tools used by agencies and businesses across the world.</li>
<li>AON Data-center Move from 1801 McGill to 700 de la Gauchetiere Ouest (2006)<ul>
<li>Was directly involved in physically moving 168 servers, 812 PCs, 227 printers and 752 phones over a period of 3 days, all without interruption of service. This significant undertaking was reported in the popular business magazine “Les Affaires” as being the largest physical IT move in Quebec that year.</li>
</ul>
</li>
<li>Implemented one of the first VMWare ESX farms crossing multiple Data-centers in Canada consisting of:<ul>
<li>48 HP Blade servers (mix of BL25p and BL460c series)</li>
<li>Over 200 VLANs and vDMZs</li>
<li>Hitachi v9570 and NetApp FAS3020 storage appliances</li>
<li>VMotion, DRS, HA, Virtual Center</li>
</ul>
</li>
<li>Planned and migrated 27 Novel Netware servers to Microsoft Windows used by over 3000 employees.</li>
<li>Designed and Implemented the Canadian Active Directory services and migrated/merged 20 independent NT4 domains to form a single uniform authentication realm for all of Aon Canada.</li>
</ul>


        </section>
        <section id="socials" className="socials">
          <SocialsView />
        </section>
      </main>
    );
  }
}

export default Resume;