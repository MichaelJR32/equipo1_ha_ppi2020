import React, { Component } from 'react'
import "./styles/JumbotronProgress.css"
import {Link} from 'react-router-dom'
export default class JumbotronProgress extends  Component{
  render(){
    
    return(
      <form className="px-6 py-3">
    <div className="jumbotron jumbotron-light">
        <img src="https://static.wixstatic.com/media/eebf4a_881b20c22a294ecc95972e90ba199bb2~mv2.png" className="img-fluid" alt="..."/>
        <h1 className="text-center">Progreso Clases Reglamentarias</h1>
        <p className="text-center">Tienes un 80% de las clases de señales reglamentarias completada.
        </p>
        <div className="progress">
       <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <div className="btn-progress"> 
           <Link to='/ProgressPage2'>
             <br/>
            <input className="btn btn-primary" type="submit" value="Siguiente"/>
             </Link>
             </div>
             </div>
      </form>
 
  
    );
  }
}