import Expertise from "../componants/Expertise";
import TitlePresentation from "../componants/Title";
import Work from "../componants/Work";
import Contact from "../componants/Contact";
import NavBar from "../componants/Nav";
import CardPort from "../componants/CardProject";

import scrollDown from "../utile/scrollFunc";

import { useRef } from "react";

function Main() {

    const cardSection = useRef(null);
   

    return(
        <div> 
            <div className="boxNavBar">
                <NavBar /> 
            </div>
          
            <div className="boxTitlePresentation">
                <TitlePresentation />
                <button onClick={() => scrollDown(cardSection)} > Test</button>
            </div>

            <div>
                <div className="mainboxExpertise">
                    <h1>Mon Expertise</h1>  
                </div>
                <Expertise />
            </div>

            <div  ref={cardSection}>
                <h1>My Work</h1>
                <Work />
            </div>
            
            <div className="mainBoxCard">
                <div className="boxCard">
                    <CardPort />
                    <CardPort />
                    <CardPort />
                    <CardPort />
                    <CardPort />
                    <CardPort />
                </div>
            </div>

            <div className="mainBoxContact">
                <div className="boxContact">
                    <h1>Contact</h1>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Main;
