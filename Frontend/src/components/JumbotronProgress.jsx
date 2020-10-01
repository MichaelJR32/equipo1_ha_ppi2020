import React, { Component } from 'react'
import "./styles/JumbotronProgress.css"
import {Link} from 'react-router-dom'
export default class JumbotronProgress extends  Component{
  render(){
    
    return(
      <form class="px-6 py-3">
    <div class="jumbotron jumbotron-light">
        <img src="https://static.wixstatic.com/media/eebf4a_881b20c22a294ecc95972e90ba199bb2~mv2.png" class="rounded mx-auto d-block" alt="..." height="400px"/>
        <h1 class="text-center">Progreso Clases Reglamentarias</h1>
        <p class="text-center">Tienes un 80% de las clases de señales reglamentarias completada.
        </p>
        <div class="progress">
       <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <div class="btn-progress"> 
           <Link to='/ProgressPage2'>
             <br/>
            <input class="btn btn-primary" type="submit" value="Siguiente"/>
             </Link>
             </div>
             </div>
      </form>
 
  
    );
  }
}