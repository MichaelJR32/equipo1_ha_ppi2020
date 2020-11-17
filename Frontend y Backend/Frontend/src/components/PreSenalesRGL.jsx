import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PreSenalesRGL extends  Component{
  
  render(){
    return(
      <form className="px-7 py-3">
      <div className="card">
    <img src="https://elpuntodelasenalizacion.com/wp-content/uploads/2014/11/senales-transito-carreteras-d.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Señales Reglamentarias</h5>
      <p className="card-text">Curso que explica que son las señales reglamentarias junto a videos didactivos y textos que ayuden al usuario a entenderlo.</p>
      <Link to='/SenalesP2' className="btn btn-primary">Comenzar clase</Link>
    </div>
  </div>
  </form>
  
    );
  }
}