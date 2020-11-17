import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList';
import Scorebox from './quiz/Scorebox';
import Results from './quiz/Results';

export default class AppPreguntas extends Component{
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: '¿Cuál es la finalidad de las señales reglamentarias?',
          choices: [
            {
              id: 'a',
              text: ' Notificar a los usuarios de las vias y autorizaciones existentes.'
            },
            {
              id: 'b',
              text: 'Notificar las personas la prevencion de las imagenes.'
            },
            {
              id: 'c',
              text: 'C- Notificar como llegar a un lugar.'
            },
            {
              id: 'd',
              text: 'Notificar como dirigerse al transito.'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: '¿De que otra manera pueden ser llamadas las señales reglamentarias?',
          choices: [
            {
              id: 'a',
              text: 'Señales cuidadosas.'
            },
            {
              id: 'b',
              text: 'Señales prohibitivas, restrictivas o reguladoras.'
            },
            {
              id: 'c',
              text: 'Señales de advertencia.'
            },
            {
              id: 'd',
              text: 'Señales de regimen.'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: '¿De que color pueden ser vistas las señales reglamentarias?',
          choices: [
            {
              id: 'a',
              text: 'Pueden ser en color azul y borde rojo.'
            },
            {
              id: 'b',
              text: 'Pueden ser en color verde y borde amarillo.'
            },
            {
              id: 'c',
              text: 'Pueden ser en color rojo y borde morado.'
            },
            {
              id: 'd',
              text: 'Pueden ser en color blanco y borde negro.'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'La señal Pare, ¿Qué significa para usted',
          choices: [
            {
              id: 'a',
              text: 'Detener momentáneamente su vehículo'
            },
            {
              id: 'b',
              text: 'Detener totalmente su vehíchulo'
            },
            {
              id: 'c',
              text: 'Ceder el paso a otro vehículo'
            },
            {
              id: 'd',
              text: 'Disminuir la velocidad del vehículo'
            }
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    )
  }
}

module.exports = AppPreguntas;
