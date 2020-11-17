import React, { Component } from 'react'
import AppPreguntas from "../components/AppPreguntas"
import NavbarLogin from '../components/NavbarLogin'

export default class QuizReglamentaria extends Component {
  render(){
    return ( 
      <div>
        <NavbarLogin/>
        <br/>
        <AppPreguntas/>
       
      </div>
    );
    
  }
}

