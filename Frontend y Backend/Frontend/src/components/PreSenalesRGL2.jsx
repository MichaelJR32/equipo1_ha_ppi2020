import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from "react-player"
import "./styles/react-player.css"
export default class PreSenalesRGL extends  Component{
  
  render(){
    return(
      
      
     <h1><br/>VIDEO EDUCATIVO 
<br/><br/>
     <div className="App">
      <ReactPlayer url="https://www.youtube.com/watch?v=6Z-9Aa3XOxg&feature=youtu.be" controls="true"
       />
       </div>
       <br/>
       <Link to='/SenalesP1' className="btn btn-primary">Atrás</Link>
       <Link to='/SenalesP3' className="btn btn-primary">Siguiente</Link>
       </h1>
       
    );
  }
}
