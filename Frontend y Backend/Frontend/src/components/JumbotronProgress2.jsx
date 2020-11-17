import React, { Component } from 'react'
import "./styles/JumbotronProgress2.css"
export default class JumbotronProgress2 extends  Component{
  render(){
    return(
      <form className="px-6 py-3">
    <div className="jumbotron jumbotron-light">
        <img src="https://static.wixstatic.com/media/eebf4a_881b20c22a294ecc95972e90ba199bb2~mv2.png" className="img-fluid" alt="..."/>
        <h1 className="text-center">Progreso Clases Preventivas</h1>
        <p className="text-center">Tienes un 80% de las clases de señales preventivas completada.
        </p>
        <div className="progress">
  <div className="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
      </form>
 
  
    );
  }
}