import React, { Component } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import PreSenalesPRV2 from '../components/PreSenalesPRV2';
export default class Home extends Component {
  render(){
    return ( 
      <div>
        
        <NavbarLogin/>
        <PreSenalesPRV2/>
        
        
      </div>
    );
    
  }
}