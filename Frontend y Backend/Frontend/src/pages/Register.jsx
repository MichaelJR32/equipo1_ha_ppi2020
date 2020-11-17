import React, { Component } from 'react'
import ContainerRegister from '../components/ContainerRegister'
import NavbarLogin from '../components/NavbarLogin'

export default class Login extends Component {
  render(){
    return ( 
      <div>
        <NavbarLogin/>
        <ContainerRegister/>
      </div>
    );
    
  }
}
