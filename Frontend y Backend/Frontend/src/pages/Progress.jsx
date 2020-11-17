import React, { Component } from 'react'
import NavbarPage from '../components/NavbarPage'
import FooterHome from '../components/FooterHome'
import JumbotronProgress from '../components/JumbotronProgress'

export default class Progress extends Component {
  render(){
    return ( 
      <div>
        <NavbarPage/>
       <JumbotronProgress/>
        <FooterHome/>
      
      </div>
    );
    
  }
}