import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ContainerLogin extends  Component{

constructor(){
super();
this.state ={
    "email":"",
   "password":""
}
}

handleChange = (e)=>{
const{name, value} = e.target;
this.setState({[name]: value});
}
  render(){

const {email, password} = this.state

    return(
      
<div className="container">
      <br/>
        <div className="form-group"/>
          <label>Correo electronico:</label>
          <input type="email" class="form-control" id="email" placeholder="Email" name="email" value={email} onChange={this.handleChange}/>
        <div/>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" class="form-control" id="password" placeholder="Contraseña" name="password" value={password} onChange={this.handleChange}/>
        </div>  
       <Link to='/home'>
        <input class="btn btn-primary" type="submit" value="Iniciar sesión"/>
        </Link>
        <div className="dropdown-divider"></div>
        <Link to='/Register' className="dropdown-item">Registrarme</Link>
      <div/>

  <form/>
    </div>

    );
  }
}