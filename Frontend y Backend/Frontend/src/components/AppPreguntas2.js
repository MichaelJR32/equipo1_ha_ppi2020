import React, { Component } from "react";
import QuestionList from "./quiz2/QuestionList";
import Scorebox from "./quiz2/Scorebox";
import Results from "./quiz2/Results";

export default class AppPreguntas2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: "¿Donde podemos encontrar usualmente las señales preventivas?",
          choices: [
            {
              id: "a",
              text:
                "Podemos encontrarlos en parqueaderos, colegios y universidades."
            },
            {
              id: "b",
              text:
                "Podemos encontrarlas comúnmente en carreteras, zonas peligrosas y vialidades urbanas."
            },
            {
              id: "c",
              text: "Podemos encontrarlas en aeropuertos."
            },
            {
              id: "d",
              text: "Podemos encontrarlas en plazas de mercado."
            }
          ],
          correct: "b"
        },
        {
          id: 2,
          text: "¿Cuál es el proposito de las señales preventivas?",
          choices: [
            {
              id: "a",
              text:
                "Su proposito es mejorar la vista de los conductores en las carreteras."
            },
            {
              id: "b",
              text:
                "Su proposito es advertir a los usuarios de las vias de riesgo."
            },
            {
              id: "c",
              text:
                "Su proposito es incitar al conductor a que no tome precauciones en la via."
            },
            {
              id: "d",
              text: "Su proposito es que el conductor conduzca a su autonomia."
            }
          ],
          correct: "b"
        },
        {
          id: 3,
          text:
            "¿Cuáles son los colores distintivos de las señales preventivas ?",
          choices: [
            {
              id: "a",
              text: "Amarillo texto color negro con forma de rombo."
            },
            {
              id: "b",
              text: "Azul con texto rojo con forma de cuadrado."
            },
            {
              id: "c",
              text: "Verde con texto blanco con forma rectangular."
            },
            {
              id: "d",
              text: "Naranja con texto azul con forma de triangulo."
            }
          ],
          correct: "a"
        },
        {
          id: 4,
          text: "¿Cual es el significado de la señal con una vaca?",
          choices: [
            {
              id: "a",
              text: "Cruce de ganado."
            },
            {
              id: "b",
              text: "Cruce de peatones."
            },
            {
              id: "c",
              text: "Cruce de maquinaria agrícola."
            },
            {
              id: "d",
              text: "Cruce de camiones."
            }
          ],
          correct: "a"
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = "";
      var results = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
      var results = "";
    }
    return (
      <div>
        {scorebox}
        <QuestionList
          {...this.state}
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)}
        />
        {results}
      </div>
    );
  }
}

module.exports = AppPreguntas2;
