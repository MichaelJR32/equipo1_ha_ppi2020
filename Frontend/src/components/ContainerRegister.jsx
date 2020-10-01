import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ContainerRegister extends  Component{
  
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

const {email, password, password2, Cedula} = this.state

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
        <div className="form-group">
          <label>Confirmar contraseña:</label>
          <input type="password" class="form-control" id="password" placeholder="Contraseña" name="password2" value={password2} onChange={this.handleChange}/>
        </div>  
        <div className="form-group">
          <label>Cedula de ciudadania:</label>
          <input type="documento_id" class="form-control" id="exampleDropdownFormPassword" placeholder="Cedula" name="cedula" value={Cedula} onChange={this.handleChange}/>
        </div>  
       <Link to='/home'>
        <input class="btn btn-primary" type="submit" value="Registrarse"/>
        </Link>

  <form/>
    </div>

    );
  }
}