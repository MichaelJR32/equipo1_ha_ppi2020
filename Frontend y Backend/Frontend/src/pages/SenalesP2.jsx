import React, { Component } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import PreSenalesRGL2 from '../components/PreSenalesRGL2';
export default class Home extends Component {
  render(){
    return ( 
      <div>
        
        <NavbarLogin/>
        <PreSenalesRGL2/>
        
        
      </div>
    );
    
  }
}