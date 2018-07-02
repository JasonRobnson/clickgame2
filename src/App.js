import React, { Component } from 'react';

import './App.css';
import Cards from "./components/Cards/Cards"
import friends from "./friends.json";
import Title from "./components/Title/Title"
import Wrapper from "./components/Wrapper";
import ScoreBox from "./components/ScoreBox"

let correctGuesses =  0;
let bestScore = 0;

class App extends Component {
  
      state = {
        friends,
        correctGuesses,
        bestScore, 
      }

      setClicked = id => {

        const friends = this.state.friends;
        const clickedMatch = friends.filter(friend => friend.id === id);

        if (clickedMatch[0].clicked){
            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Best Score: " + bestScore);

            correctGuesses = 0;

            for (let i = 0 ; i < friends.length ; i++){
                friends[i].clicked = false;
            }
            this.setState({ correctGuesses });
            this.setState({ friends });

        } else if (correctGuesses < 11) {

            clickedMatch[0].clicked = true;

            correctGuesses++;
     

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

            friends.sort( (a, b) => {return 0.5 - Math.random()});

            this.setState({ friends });
            this.setState({ correctGuesses });
        } else {

            clickedMatch[0].clicked = true;

            correctGuesses = 0;

            bestScore = 9;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < friends.length ; i++){
                friends[i].clicked = false;
            }

            friends.sort((a, b) => {return 0.5 - Math.random()});

            this.setState({ friends });
            this.setState({ correctGuesses });


        }
    };

  render() {
    return (
      <Wrapper>
          <Title>The Click Game</Title>
            <ScoreBox
              correctCounter={this.state.correctGuesses}
              bestCounter={this.state.bestScore}
            />
          

              {this.state.friends.map(friend => (
                  <Cards
                    setClicked={this.setClicked}
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                  />
              ))}
        
    
      </Wrapper>
      
 
    );
  }
}

export default App;
