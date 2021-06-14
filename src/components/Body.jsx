import React from 'react' // importar SIEMPRE react //
import '../utils/css/bodyStyles.css'
import FormAcadem from '../utils/images/FormAcadem.png'
import Languages from '../utils/images/Languages.png'
import Software from '../utils/images/software.png'
import {Link} from 'react-router-dom'


const Body = () => {
    return (
        <div className="Body">
            <div className="FirstColumn">
                <div className="FirstPart">
                    <div className="Title">
                      <div className="IconT">
                           <img src={FormAcadem} alt="Icono formación académica"></img>                   
                      </div>
                      <h3>FORMACIÓN ACADÉMICA</h3>  
                    </div>
                    <div className="InfoBody">
                        <div className="Y_N">
                        <ul>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3> 2021 » Procesamiento y digitación de datos con énfasis en desarrollo web y móvil</h3>
                            <p><h4>En formación -- Kuepa Edutech</h4></p>
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3> 2021 » Habilidades en programación y tecnología 4.0</h3>
                            <p><h4>En formación -- Universidad Sergio Arboleda</h4></p>
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3>2021 » Electrónica Industrial</h3>
                            <p><h4>En formación -- Universidad Francisco José de Caldas</h4></p>
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3> 2014-2020 » Bachiller Académico</h3>
                            <p><h4> Finalizado -- Nuevo Colegio Lusadi</h4></p>
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3>2019-2019 » Informática y convergencia tecnológica</h3>
                            <p><h4> Finalizado -- Universidad Colegio Mayor de Cundinamarca</h4></p>
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked />
                            <i />
                            <h3>2019-2019 » Manejo de herramientas tecnológicas</h3>
                            <p><h4>Finalizado -- Universidad Colegio Mayor de Cundinamarca</h4></p>
                        </li>
                        </ul>
                        </div>
                    </div>  
                    <div className="Languages">
                        <div className="IconL">
                            <img src={Languages} alt="Icono idiomas"></img>                    
                        </div>
                        <p style={{color: '#58575D'}}><h3>IDIOMAS</h3></p>
                        <ul>
                            <li>
                                <input type="checkbox" defaultChecked />
                                <i />
                                <h3> Español </h3>
                                <p style={{color: '#58575D'}}><h4>Lengua materna</h4></p>
                            </li>
                            <li>
                                <input type="checkbox" defaultChecked />
                                <i />
                                <h3> Inglés </h3>
                                <p style={{color: '#58575D'}}><h4>B1</h4></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="SecondColumn">
                <div className="ContainerBotones">
                    <Link to="/AboutMe">
                        <button className="Button">SOBRE MÍ</button>
                    </Link>
                </div>
                <div className="Title">
                    <div className="IconT">
                        <img src={Software} alt="Icono manejo de herramientas"></img>                   
                    </div>
                      <h3>MANEJO DE HERRAMIENTAS</h3>  
                </div> 
                <div className="Tools">
                    <div className="Line"> <hr/> </div>            
                    <div class="progressbars">
                        <div class="containerpb">
                            <img src="../images/hcb.png" alt="Barra de progreso"/>
                            <img src="../images/h.png" className="top" alt="html"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/hcb.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/c.png" alt="css"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/jg.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/js.png" alt="js"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/ghr.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/r.png" alt="react"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/jg.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/g.png" alt="git"/>
                        </div>
                        <div className="containerpb">
                            <img src="../utils/images/ghr.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/gh.png" alt="github"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/f.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/fi.png" alt="figma"/>
                        </div>
                        <div class="containerpb">
                            <img src="../utils/images/hcb.png" alt="Barra de progreso"/>
                            <img className="top" src="../utils/images/b.png" alt="bootstrap"/>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Body