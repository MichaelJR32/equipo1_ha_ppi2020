import React, { Component } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import PreSenalesRGL3 from '../components/PreSenalesRGL3';
export default class Home extends Component {
  render(){
    return ( 
      <div>
        
        <NavbarLogin/>
        <PreSenalesRGL3/>
        
        
      </div>
    );
    
  }
}