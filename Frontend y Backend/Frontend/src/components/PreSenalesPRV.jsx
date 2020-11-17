import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PreSenalesPRV extends  Component{
  
  render(){
    return(
      <form className="px-4 py-3">
      <div className="card">
    <img src="https://señalesdeseguridad.org/senales-de-seguridad/senales-de-peligro/" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Señales Preventivas</h5>
      <p className="card-text">Curso que explica que son las señales preventivas junto a videos didactivos y textos que ayuden al usuario a entenderlo.</p>
      <Link to='/SenalesPRV3' className="btn btn-primary">Comenzar clase</Link>
    </div>
  </div>
  </form>
  
    );
  }
}