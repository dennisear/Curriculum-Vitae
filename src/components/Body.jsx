import React from 'react' // import ALWAYS react //
import '../utils/css/bodyStyles.css' // Styles //
import FormAcadem from '../utils/images/FormAcadem.png' //Icon //
import Languages from '../utils/images/Languages.png' //Icon //
import Software from '../utils/images/software.png' //Icon //
import {Link} from 'react-router-dom' // Declaration //
import b from '../utils/images/b.png' // Technology //
import c from '../utils/images/c.png' // Technology //
import f from '../utils/images/f.png' // Technology //
import fi from '../utils/images/fi.png' // Technology //
import g from '../utils/images/g.png' // Technology //
import gh from '../utils/images/gh.png' // Technology //
import ghr from '../utils/images/ghr.png' // Progress bar //
import h from '../utils/images/h.png' // Technology //
import hcb from '../utils/images/hcb.png' // Progress bar //
import jg from '../utils/images/jg.png' // Progress bar //
import js from '../utils/images/js.png' // Progress bar //
import r from '../utils/images/r.png' // Technology //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Icon //
import { faHome} from '@fortawesome/free-solid-svg-icons'


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
                <Link to="/HeaderM">
                  <a href className="Button"><FontAwesomeIcon icon={faHome}/></a> {/*button that directs me to home*/}
                </Link>  
                <Link to="/AboutMe">
                  <button type="button" className="Button">Sobre mí</button> {/*button that directs me to page about me*/}
                </Link>
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
                            <img src={hcb} alt="Barra de progreso"/> 
                            <img src={h} className="top" alt="html"/> 
                        </div>
                        <div class="containerpb">
                            <img src={hcb} alt="Barra de progreso"/> 
                            <img src={c} className="top" alt="css"/> 
                        </div>
                        <div class="containerpb">
                            <img src={jg} alt="Barra de progreso"/> 
                            <img src={js} className="top" alt="js"/> 
                        </div>
                        <div class="containerpb">
                            <img src={ghr} alt="Barra de progreso"/> 
                            <img src={r} className="top" alt="react"/> 
                        </div>
                        <div class="containerpb">
                            <img src={jg} alt="Barra de progreso"/> 
                            <img src={g} className="top" alt="git"/> 
                        </div>
                        <div className="containerpb">
                            <img src={ghr} alt="Barra de progreso"/> 
                            <img src={gh} className="top" alt="github"/> 
                        </div>
                        <div class="containerpb">
                            <img src={f} alt="Barra de progreso"/> 
                            <img src={fi} className="top" alt="figma"/> 
                        </div>
                        <div class="containerpb">
                            <img src={hcb} alt="Barra de progreso"/> 
                            <img src={b} className="top" alt="bootstrap"/> 
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Body