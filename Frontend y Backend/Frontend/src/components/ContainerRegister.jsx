import React, { Component } from 'react'
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
const baseUrl = "https://5y0x3.sse.codesandbox.io/usuarios-registro";
const cookies = new Cookies();
export default class ContainerRegister extends  Component{
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

  registrarse = async () => {
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
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido a Learning Drive`);
          window.location.href = "./home";
        } else {
          alert("Los datos no son correctos.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render(){

const {email, password} = this.state

    return(
      
<div className="container">
      <br/>
        <div className="form-group"/>
          <label>Correo electronico:</label>
          <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={email}  onChange={this.handleChange}/>
        <div/>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" className="form-control" id="password" placeholder="Contraseña" name="password" value={password}  onChange={this.handleChange}/>
        </div>  
        <div className="form-group">
          <label>Confirmar contraseña:</label>
          <input type="password" className="form-control" id="password" placeholder="Contraseña" name="password2" />
        </div>  
        <div className="form-group">
          <label>Cedula de ciudadania:</label>
          <input type="documento_id" className="form-control" id="exampleDropdownFormPassword" placeholder="Cedula" name="cedula" />
        </div>  
       
        <input className="btn btn-primary" type="submit" value="Registrarse"  onClick={() => this.registrarse()}/>
   

  <form/>
    </div>

    );
  }
}