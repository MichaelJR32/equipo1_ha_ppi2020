import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./styles/Text.css"
export default class PreSenalesPRV2 extends  Component{
  
  render(){
    return(
      <div>
      
     <h1><br/>SEÑALES PREVENTIVAS </h1>
<br/><br/>
     <p>Las señales preventivas viales son utilizadas para activar un estado de precaución en el conductor y alertarlo ante un posible peligro en el camino. 
       Podemos encontrarlas comúnmente en carreteras, zonas peligrosas y vialidades urbanas.
       Sus colores distintivos son amarillo y gráficos o texto en color negro, con forma de rombo. </p>
       <p>Su tamaño en carreteras es mayor al utilizado en zonas urbanas ya que la velocidad a la que circulan los vehículos requiere un tamaño mayor. </p>
       <p>La SCT (Secretaría de Comunicaciones y Transportes) estipula en su reglamento las medida y alturas a las que deben instalarse los señalamientos.denominadas además de advertencia de peligro, tienen como propósito advertir a los usuarios de las vías de riesgos y/o situaciones imprevistas de carácter permanente o temporal e indicarles su naturaleza. </p>
       <br/>
       <p>Estas señales requieren que los conductores tomen las precauciones del caso ya sea reduciendo la velocidad o realizando maniobras necesarias para su propia seguridad, la del resto de los vehículos y las de los peatones. (teoria señales preventivas)</p>
       <br/>
       <Link to='/SenalesPRV3' class="btn btn-primary">Atrás</Link>
       <Link to='/QuizPreventivas' className="btn btn-primary">Siguiente</Link>
       </div>
       
    );
  }
}