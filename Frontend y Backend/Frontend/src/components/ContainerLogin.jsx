import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
const baseUrl = "https://5y0x3.sse.codesandbox.io/usuarios";
const cookies = new Cookies();
export default class ContainerLogin extends Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          email: this.state.form.email,
          password: md5(this.state.form.password)
        }
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("first_name", respuesta.first_name, { path: "/" });
          cookies.set("last_name", respuesta.last_name, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido ${respuesta.first_name} ${respuesta.last_name}`);
          window.location.href = "./home";
        } else {
          alert("El usuario o la contraseña no son correctos.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <div className="container">
        <br />
        <div className="form-group" />
        <label>Correo electronico:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <div />
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            name="password"
            onChange={this.handleChange}
          />
        </div>

        <input
          className="btn btn-primary"
          onClick={() => this.iniciarSesion()}
          type="submit"
          value="Iniciar sesión"
        />
        <div className="dropdown-divider"></div>
        <Link to="/Register" className="dropdown-item">
          Registrarme
        </Link>
        <div />

        <form />
      </div>
    );
  }
}
