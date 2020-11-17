import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from "react-player"
import "./styles/react-player.css"
export default class PreSenalesPRV2 extends  Component{
  
  render(){
    return(
      
      
     <h1><br/>VIDEO EDUCATIVO 
<br/><br/>
     <div className="App">
      <ReactPlayer url="https://youtu.be/gq-D_nhmHLQ" controls="true"
       />
       </div>
       <br/>
       <Link to='/SenalesP1' class="btn btn-primary">Atrás</Link>
       <Link to='/SenalesPRV4' class="btn btn-primary">Siguiente</Link>
       </h1>
       
    );
  }
}