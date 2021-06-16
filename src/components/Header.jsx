import React from 'react' // import ALWAYS react //
import '../utils/css/headerStyles.css' // Styles //
import Git from '../utils/images/git.png' // Github icon //
import Linkedin from '../utils/images/linkedin.png' // Linkedin icon //
import Profile from '../utils/images/profile.PNG' // My photo //
import {Link} from 'react-router-dom' // React router declaration //

const Header = () => {
    return (
        <div className="allHeader">
            <div className="containerHeader">
                <div className="titleHeader">
                    <h1>Dennis Yuliana</h1> 
                    <h2>Arango Sánchez</h2>
                </div>
                <div className="subtitleHeader">
                    <h3>Desarrolladora Web</h3>
                </div>
                <div className="Redes"> 
                    <div className="Icons">
                        <img src={Git} alt="Icono GitHub"></img> {/* GitHub icon */}
                        <img src={Linkedin} alt="Icono Linkedin"></img> {/* Linkedin icon */}
                    </div>
                    <div className="Users">
                        <Link to='https://github.com/dennisear/'>
                        <button type="button" className="ButtonH"><h3>@dennisear</h3></button> {/* Button that redirects me to my github account */}
                        </Link> 
                        <Link to='https://www.linkedin.com/in/dennis-arango/'>
                        <button type="button" className="ButtonH"><h3>@dennis-arango</h3></button> {/* Button that redirects me to my linkedin account */}
                        </Link>  
                    </div>
                </div>
            </div>
            <div className="Photo">
                <img src={Profile} alt="Foto"/>
            </div>
        </div>
    )
}
export default Header