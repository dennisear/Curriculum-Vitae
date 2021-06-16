import React from 'react' // importar SIEMPRE react //
import '../utils/css/bodyAmStyles.css'
import Contacto from '../utils/images/contacto.png'
import Logo from '../utils/images/logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

const BodyAm = () => {
    return (
        <div className="allBodyAm">
            <div className="rightColumn">
               <img src={Logo} alt="Logo"></img>  
               <div className="Title">
                    <div className="IconT">
                      <img src={Contacto} alt="Icono formación académica"></img>                  
                    </div>
                    <h3>CONTACTO</h3>  
                </div> 
                <div className="SocialMedia">
                    <Link to='https://github.com/dennisear/'>
                      <button type="button" className="btn third">GitHub</button>
                    </Link>
                    <Link to='https://www.linkedin.com/in/dennis-yuliana-arango-sanchez-b00b8b214/'>
                      <button type="button" className="btn third">Linkedin</button>
                    </Link>
                    <Link to='mailto:dennis.arango.mt@correo.usa.edu.co/'>
                      <button type="button" className="btn third">Gmail</button>
                    </Link> 
                    <Link to='https://wa.me/3125059975?text=¡Hola!%20revise%20tu%20curriculum%20vitae%20y%20me%20interesa%20trabajar%20contigo/'>
                      <button type="button" className="btn third">WhatsApp</button>
                    </Link>   
                </div>
            </div>
            <div className="leftColumn">
                <div className="CButton">
                    <Link to="/HeaderM">
                        <a href className="Button"><FontAwesomeIcon icon={faHome}/></a>
                    </Link>                    
                    <Link to="/Home">
                     <button className="Button">Formación académica</button>
                    </Link>
                </div>
                <div className="Profile">
                    <div className="TitleProf">
                        <p><b>PERFIL</b></p>
                    </div>
                    <div className="InfoProf">
                        <p>Con años de experiencia en la gestión de sistemas, he sido capaz de adaptarme a los diferentes planes informáticos de las empresas para las que he trabajado. Adicionalmente, cuento con una gran capacidad de análisis de la información y experiencia en la gestión de equiposCon años de experiencia en la gestión de sistemas, he sido capaz de adaptarme a los diferentes planes informáticos de las empresas para las que he trabajado. Adicionalmente, cuento con una gran capacidad de análisis de la información y experiencia en la gestión de equipos.</p>
                    </div>
                    <div className="TitleProf">
                        <p><b>HABILIDADES</b></p>
                    </div>  
                    <div className="Modals">
                        <a href="#miModal1">Creatividad</a>
                        <div id="miModal1" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>CREATIVIDAD</h2>
                                <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                            </div>  
                        </div>  
                        <a href="#miModal2">Comunicación asertiva</a>
                        <div id="miModal2" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>COMUNICACIÓN ASERTIVA</h2>
                                <p>Expreso en forma clara lo que pienso, siento o necesito, teniendo en cuenta los derechos, sentimientos, valores y necesidades del usuario o interlocutor. Cobrando de esta forma gran importancia el reconocimiento y el respeto hacia las de las demás personas.</p>
                            </div>  
                        </div>  
                        <a href="#miModal3">Autodidactismo</a>
                        <div id="miModal3" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>AUTODIDACTISMO</h2>
                                <p>A lo largo de mi educación como desarolladora he contado con docentes, pero también tengo la capacidad de formarme a través de mi propio aprendizaje. No suelo conformarme con lo que sé, siempre tengo la necesidad constante de aprender e indagar, por medio de la utilización de los recursos tecnológicos que están a mi disposición. </p>
                            </div>  
                        </div>  
                        <a href="#miModal4">Adaptabilidad</a>
                        <div id="miModal4" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>ADAPTABILIDAD</h2>
                                <p> Tengo la capacidad de evolucionar y adaptarme cuando las cosas cambian, pues el desarrollo sigue siendo un mundo nuevo, y está evolucionando súper rápido, lo que lleva a que la adaptación sea algo fundamental.</p>
                            </div>  
                        </div>  
                        <a href="#miModal5">Proactividad</a>
                        <div id="miModal5" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>PROACTIVIDAD</h2>
                                <p>Esta característica se vincula con la capacidad de autoasignarme responsabilidades y de no depender de otra persona para ponerme manos a la obra. Soy una persona activa, con alta capacidad de respuesta, iniciativa y disposición ante cualquier circunstancia.</p>
                            </div>  
                        </div>  
                        <a href="#miModal6">Empatía</a>
                        <div id="miModal6" className="modal">
                            <div className="modal-contenido">
                                <div className="Foot"><a href="#">X</a></div>
                                <h2>EMPATÍA</h2>
                                <p>Tengo la capacidad para entender a las personas y «conectar» con ellas. Pues cualquier tipo de interacción con el cliente/usuario necesita de una aptitud de empatía y comunicación que la IA no puede proporcionar</p>
                            </div>  
                        </div>  
                    </div>                        
                </div>
            </div>
        </div>
    )
}

export default BodyAm