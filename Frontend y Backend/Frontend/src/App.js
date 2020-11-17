import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import ProgressPage2 from "./pages/ProgressPage2";
import SenalesP1 from "./pages/SenalesP1";
import SenalesP2 from "./pages/SenalesP2";
import SenalesP3 from "./pages/SenalesP3";
import SenalesPRV3 from "./pages/SenalesPRV3";
import SenalesPRV4 from "./pages/SenalesPRV4";
import QuizReglamentaria from "./pages/QuizReglamentaria";
import QuizPreventivas from "./pages/QuizPreventivas";
export default function App() {
  
  return (
    <BrowserRouter>
    <Switch>
<Route exact path="/" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/profile" component={Profile}/>
<Route exact path="/progress" component={Progress}/>
<Route exact path="/progresspage2" component={ProgressPage2}/>
<Route exact path="/senalesp1" component={SenalesP1}/>
<Route exact path="/senalesp2" component={SenalesP2}/>
<Route exact path="/senalesp3" component={SenalesP3}/>
<Route exact path="/quizreglamentaria" component={QuizReglamentaria}/>
<Route exact path="/quizpreventivas" component={QuizPreventivas}/>
<Route exact path="/senalesprv3" component={SenalesPRV3}/>
<Route exact path="/senalesprv4" component={SenalesPRV4}/>
      </Switch>
      </BrowserRouter>
  
      
  );
}
