import React, { Component } from 'react'
import NavbarPage from '../components/NavbarPage'
import JumbotronHome from '../components/JumbotronHome'
import FooterHome from '../components/FooterHome'

export default class Home extends Component {
  render(){
    return ( 
      <div>
        
        <NavbarPage/>
        
        <JumbotronHome/>
        <FooterHome/>
        
        
      </div>
    );
    
  }
}
