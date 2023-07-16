import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import HabitosLogo1F from './images/CartaFrontFrame.jpg';
import HabitosLogo1B from './images/CartaBackFrame.jpg';
import HabitosLogo2F from './images/CartaFrontFrame2.jpg';
import HabitosLogo2B from './images/CartaBackFrame2.jpg';
import HabitosLogo3F from './images/CartaFrontFrame3.jpg';
import HabitosLogo3B from './images/CartaBackFrame3.jpg';
import HabitosLogo4F from './images/CartaFrontFrame4.jpg';
import HabitosLogo4B from './images/CartaBackFrame4.jpg';
import HabitosLogo5F from './images/CartaFrontFrame5.jpg';
import HabitosLogo5B from './images/CartaBackFrame5.jpg';
import HabitosLogo6F from './images/CartaFrontFrame6.jpg';
import HabitosLogo6B from './images/CartaBackFrame6.jpg';

// function App() {
class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    // <img src={card.img} alt="Card Image" />

    this.state = {
      cards: [
        {id: 1, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.1", han:"Causa y efecto", pin: "Pon atención a tu corazón y desde ahí manifiesta: 'Me conecto con mi Luz que se encuentra dentro de mi corazón. Agradezco por las experiencias vividas que me permiten crecer. Siento la fuerza de mi interior para asumir por completo la Responsabilidad de mi vida. Soy consciente que todas mis decisiones tendrán un resultado' (Repítelo tres veces) "},
        {id: 2, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.2", han:"Recarga tu Luz", pin:"Di: “Millones de chispas sagradas que vienen del Mundo Superior y la Energía de la Madre GAIA retornan a mí, a mi Alma, a mi Espíritu. Mi vida crece con más brillo y Energía todos y cada uno de los días” (Repítelo tres veces)"},
        {id: 3, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.3", han:"Pedir por un Milagro", pin:"Di: 'Te entrego desde mi Corazón este deseo para que a través de tu Luz se materialice en mi vida. Quedo en actitud de espera incondicional. Tengo la certeza que voy a recibir lo que necesito en el momento apropiado en mi vida' (Repítelo tres veces)"},
        {id: 4, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.4", han:"Observa tus pensamientos", pin:"Siente a tu corazón (¿Cómo está latiendo?) y desde ahí manifiesta en voz alta: 'Reconozco que estás tratando de protegerme y te lo agradezco. Eres parte de mi vida y sé que cuidas de mí. Ahora te pido que me APOYES para que mi mente y corazón reciban y se mantengan en la Luz del Creador' (Repítelo tres veces)"},
        {id: 5, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.5", han:"Sanación", pin:"Di: “Desde mi corazón me perdono y siento como esta energía aligera todas mis dolencias. Doy las gracias y reconozco que aprendí (expresa lo que aprendiste). Asumo la Responsabilidad de mi vida física, emocional, mental, económica y espiritual” (Repítelo tres veces)."},
        {id: 6, img:"./src/images/CartaFrontFrame.jpg", imgb:"./src/images/CartaBackFrame.jpg", eng:"Carta No.6", han:"Conéctate a través de los sueños", pin:"Esta noche cuando estés listo para dormir, realiza una meditación de conexión con el Creador (Universo) y solicita que en el sueño te sea revelado y puedas encontrar la respuesta a tu inquietud, o con la intención de conversar con Tu Maestro - Guía o simplemente pide tener un sueño tranquilo y despertarte en buen estado de ánimo"}
      ],
      currentCard: {}
    }
  }
    // componentDidMount(){
    // componentDidUpdate()
  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

    getRandomCard(currentCards){
      var card = currentCards[Math.floor(Math.random() * currentCards.length)]
      // var pic = card.id
      // console.log(pic)
      // var img = card.img
      // console.log(img)
  
      return(card);
    }

    // updateCard(){
    //   const currentCards = this.state.cards;
    //   this.setState({
    //     currentCard: this.getRandomCard(currentCards)
    //   })
    // }
    // GPTs
    updateCard() {
      // Generate a random card index
      const randomIndex = Math.floor(Math.random() * this.state.cards.length);
      
      // Get the random card
      const randomCard = this.state.cards[randomIndex];
      
      // Update the currentCard state with the random card
      this.setState({ currentCard: randomCard });
    }
    

    //

    renderContent() {
      const cardId = this.state.currentCard.id
      console.log(cardId)

      if (cardId === 1) {
        return (
          <div className="App">
          <div className="cardRow">
              <Card 
                img={HabitosLogo1F} 
                imgb={HabitosLogo1B}
                // img={this.state.currentCard.img}
                // eng={this.state.currentCard.eng}  
                // han={this.state.currentCard.han} 
                // pin={this.state.currentCard.pin} 
                />
        </div>
            <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
            </div>
        </div>
          ) } 
      else if (cardId === 2) {
        return (
          <div className="App">
            <div className="cardRow">
                <Card 
                  img={HabitosLogo2F} 
                  imgb={HabitosLogo2B}
                  />
            </div>
            <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
            </div>
        </div>
  
     ) }
     else if (cardId === 3) {
      return (
        <div className="App">
          <div className="cardRow">
              <Card 
                img={HabitosLogo3F} 
                imgb={HabitosLogo3B}
                />
          </div>
          <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
          </div>
      </div>

   ) }

   else if (cardId === 4) {
    return (
      <div className="App">
        <div className="cardRow">
            <Card 
              img={HabitosLogo4F} 
              imgb={HabitosLogo4B}
              />
        </div>
        <div className="buttonRow">
        <DrawButton drawCard={this.updateCard} />
        </div>
    </div>

 ) }

    else if (cardId === 5) {
      return (
        <div className="App">
          <div className="cardRow">
              <Card 
                img={HabitosLogo5F} 
                imgb={HabitosLogo5B}
                />
          </div>
          <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
          </div>
      </div>

    ) }

    else if (cardId === 6) {
      return (
        <div className="App">
          <div className="cardRow">
              <Card 
                img={HabitosLogo6F} 
                imgb={HabitosLogo6B}
                />
          </div>
          <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
          </div>
      </div>

    ) }

     else  {
      return (
        <div className="App">
          <div className="cardRow">
              <Card 
                img={HabitosLogo1F} 
                imgb={HabitosLogo1B}
                />
          </div>
          <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
          </div>
      </div>

   ) };

    }

  render() {
    return (
        <div>
        {this.renderContent()}
      </div>
      
    ) }
  }
        

  
export default App;
