import React from 'react';
import './App.css';
import './resume.pdf';

function App() {

  


  return (
    <div className="App">
      <div className="Resume">
      <div className="empty_space"></div>
        {/* <div className="up_arrow"> ^ </div>
        <div className="potentialities"> Language </div> */}
      
      <span className="intro">~& the Multipotentiality of &~
      </span>
      <span className="intro_mirror">~& the Multipotentiality of &~
      </span>
      <div className="name">
        <p></p>
      <span className="M_R"> M</span>
      <span className="ercy_dhne"> E R C Y </span>
      <span className="O">O</span>
      <span className="ercy_dhne"> D H N E </span>
      <span className="M_R">R</span>
      </div>
      <div className="intro_mirror">~& the Multipotentiality of &~
      </div>
      <span className="intro">~& the Multipotentiality of &~
      </span>
      <div className="empty_space"></div>
      <div className="potentialities" onClick="showResume"> <a href="#resume"> Resume </a></div>
      <div className="down_arrow">v</div>
      <div className="empty_space"></div>
      <div className="resume" id="resume" >
      <div className="buffer"></div>
      <hr />
      <p>Tenacious Multipotentialite who excels in problem identification and crafting creative solutions across </p>
      <p>fields and platforms; strong aptitude in applying both hard and soft skills and adapting to scale and scope</p>
      <hr />
      <h3>TECHNICAL EDUCATION</h3>
      <p>Academy Pgh —​ ​ A 12-week, demand-driven bootcamp in which self-managed teams study and work in: <br />Object-oriented programming and web development, employing:</p>
      <h5>Python3 • C# • Ruby • Rails • React • React Native • ASP.NET • Ajax • Javascript • HTML • CSS • Visual Studio Code • <br />Visual Studio • Git • SQL • SQLight • PostgreSQL • Agile development • unit testing • TDD • <br /> RSpec • Selenium • Cucumber • APIs • SEO a​ nd​ SEM</h5>
      <p>to build programs from “Hello World” to fully-functional websites and applications such as a client-commissioned mobile app for business accessibility and door security.</p>
      <h3>CONTRACT BASED WORK EXPERIENCE</h3>
      <p className="position">Copy Editor — Smith &​ Diction ||​ Philadelphia May ‘19 – Present</p>
      <p> • Research and write compelling copy for websites, ad campaigns, branding material and brochures</p>
      <p className="position">Real Estate Agent — RE/MAX Select Realty || East End, Pittsburgh Jan ‘19 – Present</p>
      <p>​ • Draft and negotiate sales contracts, build client relations, and adhere to fiduciary obligations</p>
      <p className="position">Comedy Project Producer, Performer & Team Leader May ‘17 – Present</p>
      <p>​ • ​Craft team-building/entertainment experiences as an Improv Response Trainer; applicable from novice to professional-level experience; and from personal coaching to auditorium-sized corporate events</p>
      <h3>EMPLOYMENT EXPERIENCE</h3>
      <p className="position">Volunteer Coordinator — Habitat for Humanity ReStore || Pittsburgh, PA Oct ‘17 – Feb ‘19</p>
      <p>•​Supervisedandmanaged50+volunteersofdiverseskilllevels,abilities,andbackgrounds</p>
      <p>• Trained, educated, and encouraged them in projects and tasks that contributed to store betterment   </p>
      <p>• Designed and deployed operating and training procedures to improve daily work-flow</p>
      <p>• Oversaw continual growth in store profitability, individual donation value and volunteer retention</p>
      <p className="position">STEAM Educator/Dream Consultant — TechShop || Pittsburgh, PA April ‘17 – Sept ‘17</p>
      <p>• Developed curriculum and led project-based STEAM education</p>
      <p>• Coordinated space, equipment and supply needs across departments</p>
      <p>• Consulted on projects and curated events and experiences to increase and retain membership</p>
      <p className="position">Sales Support/Account Manager — D&S Communications || Chicago, IL Oct ‘15 – May ‘16</p>
      <p>• Received and processed orders, managed databases, performed lead forensics and handled invoicing</p>
      <p>• Researched, learned, used and taught various CRM and POS platforms such as Sales Force  </p>
      <p>• Supported in the acquisition and integration of Mako Networks, a PCI-compliance appliance company</p>
      <p className="position">Crew Member — Spak Brothers Pizza || Pittsburgh, PA Oct ‘16 – Oct ‘18</p>
      <p>• Devised and revamped systems for order placement and fulfillment   </p>
      <p>• Developed and integrated methods for tracking profitability and learning from instances of failure</p>
      <p>• Spearheaded training and implementation of a new POS system</p>
      <div className="buffer"></div>
      </div>
      </div>
    </div>
    
  );
}


export default App;
