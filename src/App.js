import React from 'react';
import './App.css';
import './resume.pdf';
import Portfolio from './Portfolio';
/* 
██╗  ██╗██╗██████╗ ███████╗    ███╗   ███╗███████╗
██║  ██║██║██╔══██╗██╔════╝    ████╗ ████║██╔════╝
███████║██║██████╔╝█████╗      ██╔████╔██║█████╗  
██╔══██║██║██╔══██╗██╔══╝      ██║╚██╔╝██║██╔══╝  
██║  ██║██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝
*/

function App() {

  return (
    <div className="App">
      <div className="Resume">
        <div className="empty_space"></div> 
        <div className="BusinessCard">
        <span className="intro">~& the Multipotentiality of &~</span>
        <span className="intro_mirror">~& the Multipotentiality of &~
        </span>
          <p></p>
          <span className="M_R"> M</span>
          <span className="ercy_dhne"> E R C Y </span>
          <span className="O">O</span>
          <span className="ercy_dhne"> D H N E </span>
          <span className="M_R">R</span>
          <p></p>
        <div className="intro_mirror">~& the Multipotentiality of &~</div>
        <span className="intro">~& the Multipotentiality of &~
        </span>
        <div className="empty_space"></div>
        <div className="down_arrow">v</div>
        </div>
        <div className="empty_space"></div>
        <div className="resume" id="resume" >
        <div className="resume_title">
              </div>
      <p>---</p>
      <p>Developer</p>
      <p>Writer</p>
      <p>Educator</p>
      <p>Linguist</p>
      {/* <h3></h3>
      <p className="position">Copy Editor — Smith &​ Diction ||​ Philadelphia <span className="dates">May ‘19 – Present</span></p>
      <p> • Research and write compelling copy for websites, ad campaigns, branding material and brochures</p>
      <p className="position">Real Estate Agent — RE/MAX Select Realty || East End, Pittsburgh <span className="dates">Jan ‘19 – Present</span></p>
      <p>​ • Draft and negotiate sales contracts, build client relations, and adhere to fiduciary obligations</p>
      <p className="position">Comedy Project Producer, Performer & Team Leader <span className="dates">May ‘17 – Present</span></p>
      <p>​ • ​Craft team-building/entertainment experiences as an Improv Response Trainer; applicable from novice to professional-level experience; and from personal coaching to auditorium-sized corporate events</p>
      <h3>EMPLOYMENT EXPERIENCE</h3>
      <p className="position">Volunteer Coordinator — Habitat for Humanity ReStore || Pittsburgh, PA <span className="dates">Oct ‘17 – Feb ‘19</span></p>
      <p>•​ Supervised and managed 50+ volunteers of diverse skill levels, abilities, and backgrounds </p>
      <p>• Trained, educated, and encouraged them in projects and tasks that contributed to store betterment   </p>
      <p>• Designed and deployed operating and training procedures to improve daily work-flow</p>
      <p>• Oversaw continual growth in store profitability, individual donation value and volunteer retention</p>
      <p className="position">STEAM Educator/Dream Consultant — TechShop || Pittsburgh, PA <span className="dates">April ‘17 – Sept ‘17</span></p>
      <p>• Developed curriculum and led project-based STEAM education</p>
      <p>• Coordinated space, equipment and supply needs across departments</p>
      <p>• Consulted on projects and curated events and experiences to increase and retain membership</p>
      <p className="position">Sales Support/Account Manager — D&S Communications || Chicago, IL <span className="dates">Oct ‘15 – May ‘16</span></p>
      <p>• Received and processed orders, managed databases, performed lead forensics and handled invoicing</p>
      <p>• Researched, learned, used and taught various CRM and POS platforms such as Sales Force  </p>
      <p>• Supported in the acquisition and integration of Mako Networks, a PCI-compliance appliance company</p>
      <p className="position">Crew Member — Spak Brothers Pizza || Pittsburgh, PA <span className="dates">Oct ‘16 – Oct ‘18</span></p>
      <p>• Devised and revamped systems for order placement and fulfillment   </p>
      <p>• Developed and integrated methods for tracking profitability and learning from instances of failure</p>
      <p>• Spearheaded training and implementation of a new POS system</p>*/}
      <p>---</p>
      </div>
      <div className="footer_links">
      {/* <span className="intro_mirror"> • ~ & t h e M u l t i p o t e n t i a l i t y  o f & ~ </span> */}
        <a className="footer_links" href="https://github.com/MercyCoder"> GitHub</a> 
        <a className="footer_links" href="https://www.linkedin.com/in/mercyo">LinkedIn</a>
        <a className="footer_links" href="https://codepen.io/mercycoder">CodePen</a>
        {/* <span className="intro"> • ~  & t h e   M u l t i p o t e n t i a l i t y  o f  &  ~  • </span> */}
        </div>

      <div className="buffer">      
      </div> 
      </div>
    </div>
    
  );
}


export default App;
