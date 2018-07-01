import React, { Component } from 'react';

// import './App.css';
import Cards from "./components/Cards/Cards"
import friends from "./friends.json";
import Title from "./components/Title/Title"
import Wrapper from "./components/Wrapper";



class App extends Component {
  
      state = {
        friends
      }

      removeFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id)
        this.setState({ friends })
      }

  render() {
    return (
      <Wrapper>
          <Title>The Click Game</Title>
              {this.state.friends.map(friend => (
                  <Cards
                    removeFriend={this.removeFriend}
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
