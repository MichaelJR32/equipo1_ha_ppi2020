import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PreSenalesPRV extends  Component{
  
  render(){
    return(
      <form class="px-4 py-3">
      <div class="card">
    <img src="https://señalesdeseguridad.org/senales-de-seguridad/senales-de-peligro/" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Señales Preventivas</h5>
      <p class="card-text">Curso que explica que son las señales preventivas junto a videos didactivos y textos que ayuden al usuario a entenderlo.</p>
      <Link to='/SenalesPRV3' class="btn btn-primary">Comenzar clase</Link>
    </div>
  </div>
  </form>
  
    );
  }
}