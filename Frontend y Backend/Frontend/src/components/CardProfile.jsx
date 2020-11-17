import React, { Component } from 'react'
import "./styles/CardStyles.css"
export default class CardProfile extends  Component{
  render(){
    return(
      <form className="px-4 py-3">
    <div className="card">
          <img src="https://cdn4.iconfinder.com/data/icons/user-interface-glyph-5/32/User-256.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Perfil</h5>
            <p className="card-text">Ejemplo.</p>
            <p className="card-text"><strong>Correo electronico</strong></p>
            <p className="card-text">ejemplo@hotmail.com</p>
            <p className="card-text"><strong>Nombre de usuario</strong></p>
            <p className="card-text">Sergio</p>
          </div>
       
       </div>
      </form>
  
    );
  }
}