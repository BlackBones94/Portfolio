import Expertise from "../componants/Expertise";
import TitlePresentation from "../componants/Title";
import Work from "../componants/Work";
import Contact from "../componants/Contact";
import NavBar from "../componants/Nav";
import CardPort from "../componants/CardProject";


function Main() {
    return(
        <div> 
            <div className="boxNavBar">
                <NavBar/> 
            </div>
          
            <div className="boxTitlePresentation">
                <TitlePresentation />
            </div>

            <div>
                <div className="boxExpertise">
                    <h1>Mon Expertise</h1>  
                </div>
                <Expertise />
            </div>

            <div>
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