import React from 'react'
import "./Cards.css" 


const Cards = props => (

      
    <div>
     <div className="container">
            <div className="row">
                <div className="col m7">
                    <div className="card"> 
                        <div className="card-image image-container">
                            <img src={props.image} alt={props.name}/>
                        </div>
                       
                        <h3>{props.name}</h3>
                    </div>
                        
                </div>
                
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove"> 𝘅 </span>
    </div>

    </div>
    
  
)

export default Cards;
