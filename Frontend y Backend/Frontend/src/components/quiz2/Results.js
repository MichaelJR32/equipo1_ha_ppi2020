import React, { Component } from "react";
import Solution from "./Solution";
import { Link } from "react-router-dom";
class Results extends Component {
  render() {
    let percent = (this.props.score / this.props.questions.length) * 100;
    if (percent > 80) {
      var message = "Buen trabajo!";
    } else if (percent < 80 && percent > 60) {
      var message = "Lo hiciste bien!";
    } else {
      var message = "Trata de mejorar!";
    }
    return (
      <div>
        <div className="well">
          <h4>
            {" "}
            Respondiste {this.props.score} de {this.props.questions.length}{" "}
            Correctamente{" "}
          </h4>
          <h1>
            {percent}% - {message}
          </h1>
          <hr />
          <center>
            <Link to="/home" className="btn btn-default btn-success">
              Volver al inicio
            </Link>
          </center>
        </div>
        <div id="solutions">
          {this.props.questions.map((question) => {
            return (
              <Solution question={question} key={question.id} {...this.props} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Results;
