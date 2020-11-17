import React, { Component } from 'react'
import NavbarPage from '../components/NavbarPage'
import FooterHome from '../components/FooterHome'
import JumbotronProgress2 from '../components/JumbotronProgress2'

export default class ProgressPage2 extends Component {
  render(){
    return ( 
      <div>
        <NavbarPage/>
       <JumbotronProgress2/>
        <FooterHome/>
      
      </div>
    );
    
  }
}