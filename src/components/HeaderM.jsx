import React from 'react' // import ALWAYS react //
import {Link} from 'react-router-dom' //Declaration//
import '../utils/css/headerMStyles.css' //Styles//
import Logo from '../utils/images/logo.png'
import Banner from '../utils/images/banner.jpeg'

const HeaderM = () => {
    return (
        <div className="allHeaderM">
            <h1 name="Header" id="Header"></h1>
            <div className="Logo">
               <img src={Logo} alt="Logo"/>
            </div>
            <div className="Menu"> 
                <Link to='/Home'>
                    <button type="button" id="boton" className="grow_spin">Curriculum Vitae</button> {/* Button that takes me to the page 'formación académica' */}
                </Link>
                <a href="#Repository"><button type="button" id="boton" className="grow_spin">Repositorio</button></a> {/* Button that takes me to the component body*/}
            </div>
            <div className="Banner">
               <img src={Banner} alt="Banner"></img>
            </div>
        </div>
    )
}
export default HeaderM