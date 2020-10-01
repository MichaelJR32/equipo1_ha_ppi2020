import React, { Component } from 'react'
import "./styles/CardStyles.css"
export default class CardProfile extends  Component{
  render(){
    return(
      <form class="px-4 py-3">
    <div class="card">
          <img src="https://cdn4.iconfinder.com/data/icons/user-interface-glyph-5/32/User-256.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Perfil</h5>
            <p class="card-text">Ejemplo.</p>
            <p class="card-text"><strong>Correo electronico</strong></p>
            <p class="card-text">ejemplo@hotmail.com</p>
            <p class="card-text"><strong>Nombre de usuario</strong></p>
            <p class="card-text">Sergio</p>
          </div>
       
       </div>
      </form>
  
    );
  }
}