import React from 'react' // importar SIEMPRE react //
import Contacto from '../utils/images/contacto.png'
import Logo from '../utils/images/logo.png'

const BodyAm = () => {
    return (
        <div className="allBodyAm">
            <div className="leftColumn">
               <img src={Logo} alt="Logo"></img>  
               <div className="Title">
                    <div className="IconT">
                      <img src={Contacto} alt="Icono formación académica"></img>                  
                    </div>
                    <h3>CONTACTO</h3>  
                </div> 
                <div className="Tools">
                    <div className="Line"> <hr/> </div>
                    <div className="SocialMedia">
                        <button onClick="location.href='https://www.facebook.com'">Llévame a otro lado</button>
                        <button onClick="location.href='https://www.facebook.com'">Llévame a otro lado</button>
                        <button onClick="location.href='https://www.facebook.com'">Llévame a otro lado</button>
                        <button onClick="location.href='https://www.facebook.com'">Llévame a otro lado</button>
                    </div>
                </div>




            </div>

        </div>

        

    )
}

export default BodyAm