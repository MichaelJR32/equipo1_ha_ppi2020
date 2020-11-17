import React, { Component } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class JumbotronHome extends Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("first_name", { path: "/" });
    cookies.remove("last_name", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };
  
  render() {
    return (
      <form className="px-4 py-3">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">¿Que es Learning Drive?</h1>
            <p className="lead">
              Es un servicio para el público que tiene la problemática de
              recibir muchos comparendos y multas, así como accidentes
              automovilísticos por la carencia de educación vial, se llama
              "Learning Drive" y es un producto el cual busca educar vial mente
              por medio de las señales de tránsito y su significado, a
              diferencia de Señales de Trafico DGT España nuestro aplicativo
              servirá en todo el territorio nacional.
            </p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Señales de transito</h1>
            <p className="lead">
              Se les explicara las señales de transito: Preventivas y
              reglamentarias, las cuales ayudaran a que las personas tengan un
              mejor rendimiento en las calles. Al final de todo se pondrá a
              prueba todo lo aprendido en un examen.
            </p>
            <br/>
            <button onClick={() => this.cerrarSesion()} type="button" className="btn btn-primary">Cerrar Sesion</button>
          </div>
        </div>
      </form>
    );
  }
}
