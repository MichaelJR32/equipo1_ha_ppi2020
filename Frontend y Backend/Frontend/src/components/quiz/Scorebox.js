import React, {Component} from 'react';

class Scorebox extends Component{

  render() {
    return(
      <div className="well">
        Pregunta {this.props.current} de {this.props.questions.length}
        <span className="pull-right"><br/><strong> Puntaje: {this.props.score}</strong></span>
      </div>
    )
  }
}

export default Scorebox;
