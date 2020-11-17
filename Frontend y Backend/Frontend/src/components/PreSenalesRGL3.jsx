import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./styles/Text.css"
export default class PreSenalesRGL3 extends  Component{
  
  render(){
    return(
      <div>
      
     <h1><br/>SEÑALES REGLAMENTARIAS </h1>
<br/><br/>
     <p>Las señales de tránsito reglamentarias también pueden llamarse prohibitivas, restrictivas, reguladoras o de prohibición. Se destacan por tener forma circular con borde rojo y fondo blanco. También las hay en color azul con borde rojo o sin él. </p>
       <p>Las más comunes son las que indican los límites de velocidad o las que indicar los límites de altura para un camión.tienen por finalidad notificar a los usuarios de las vías, las prioridades en el uso de las mismas, así como las prohibiciones, restricciones, obligaciones y autorizaciones existentes. </p>
       <p>La SCT (Secretaría de Comunicaciones y Transportes) estipula en su reglamento las medida y alturas a las que deben instalarse los señalamientos.denominadas además de advertencia de peligro, tienen como propósito advertir a los usuarios de las vías de riesgos y/o situaciones imprevistas de carácter permanente o temporal e indicarles su naturaleza. </p>
       <br/>
       <p>Su transgresión constituye infracción a las normas del tránsito. deben ser colocadas en el lugar donde se requiera establecer la regulación, y si las condiciones del tránsito o de la vía lo hacen necesario, pueden ser repetidas al costado izquierdo, a fin de garantizar su observación y respeto. (teoria señales reglamentarias)</p>
       <br/>
       <Link to='/SenalesP2' className="btn btn-primary">Atrás</Link>
       <Link to='/QuizReglamentaria' className="btn btn-primary">Siguiente</Link>
       </div>
       
    );
  }
}