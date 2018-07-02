
import React from 'react';
import "./ScoreBox.css" 

const ScoreBox  = props => (
  <div className="ScoreBox">
          <h4>
             Your score: {props.correctCounter}
          </h4>
          <br/>
          <h4>
             Best score: {props.bestCounter}
          </h4>
  </div>
   
)

export default ScoreBox



// class ScoreBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// };  
// export default ScoreBox;