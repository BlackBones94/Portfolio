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
          
            <TitlePresentation />
            <div>
                <h1>Mon Expertise</h1>
                <Expertise />
            </div>

            <div>
                <h1>My Work</h1>
                <Work />
            </div>

            <div>
                <CardPort />
                <CardPort />
            </div>
            
            <div>
                <h1>Contact</h1>
                <Contact />
            </div>
        </div>
    )
}

export default Main;