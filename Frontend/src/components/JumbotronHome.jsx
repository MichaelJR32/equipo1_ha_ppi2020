import React, { Component } from 'react'
export default class JumbotronHome extends  Component{
  render(){
    return(
      <form class="px-4 py-3">
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">¿Que es Learning Drive?</h1>
            <p class="lead">Es un servicio para el público que tiene la problemática de recibir muchos comparendos y multas, así como accidentes automovilísticos por la carencia de educación vial, se llama "Learning Drive" y es un producto el cual busca educar vial mente por medio de las señales de tránsito y su significado, a diferencia de Señales de Trafico DGT España nuestro aplicativo servirá en todo el territorio nacional.</p>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Señales de transito</h1>
              <p class="lead">Se les explicara las señales de transito: Preventivas y reglamentarias, las cuales ayudaran a que las personas tengan un mejor rendimiento en las calles. Al final de todo se pondrá a prueba todo lo aprendido en un examen.</p>
            </div>
          </div>
          </form>
  
    );
  }
}