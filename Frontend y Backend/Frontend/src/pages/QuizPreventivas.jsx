import React, { Component } from 'react'
import AppPreguntas2 from "../components/AppPreguntas2"
import NavbarLogin from '../components/NavbarLogin'

export default class QuizPreventivas extends Component {
  render(){
    return ( 
      <div>
        <NavbarLogin/>
        <br/>
        <AppPreguntas2/>
       
      </div>
    );
    
  }
}