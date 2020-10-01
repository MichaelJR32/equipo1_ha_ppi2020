import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PreSenalesRGL extends  Component{
  
  render(){
    return(
      <form class="px-7 py-3">
      <div class="card">
    <img src="https://elpuntodelasenalizacion.com/wp-content/uploads/2014/11/senales-transito-carreteras-d.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Señales Reglamentarias</h5>
      <p class="card-text">Curso que explica que son las señales reglamentarias junto a videos didactivos y textos que ayuden al usuario a entenderlo.</p>
      <Link to='/SenalesP2' class="btn btn-primary">Comenzar clase</Link>
    </div>
  </div>
  </form>
  
    );
  }
}