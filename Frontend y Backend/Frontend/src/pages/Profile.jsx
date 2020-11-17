import React, { Component } from 'react'
import NavbarPage from '../components/NavbarPage'
import FooterHome from '../components/FooterHome'
import CardProfile from '../components/CardProfile'

export default class Home extends Component {
  render(){
    return ( 
      <div>
        <NavbarPage/>
       <CardProfile/>
        <FooterHome/>
      
      </div>
    );
    
  }
}
