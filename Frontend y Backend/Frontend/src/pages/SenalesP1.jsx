import React, { Component } from 'react'
import NavbarPage from '../components/NavbarPage'
import FooterHome from '../components/FooterHome'
import PreSenalesPRV from '../components/PreSenalesPRV'
import PreSenalesRGL from '../components/PreSenalesRGL'

export default class SenalesP1 extends Component {
  render(){
    return ( 
      <div>
        <NavbarPage/>
        <PreSenalesPRV/>
        <PreSenalesRGL/>
        <FooterHome/>
      
      </div>
    );
    
  }
}