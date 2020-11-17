import React, { Component } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import PreSenalesPRV3 from '../components/PreSenalesPRV3';
export default class Home extends Component {
  render(){
    return ( 
      <div>
        
        <NavbarLogin/>
        <PreSenalesPRV3/>
        
        
      </div>
    );
    
  }
}