import React from 'react' 
import '../App.css'

export default function ProfileCard(props){
    return (
      <div>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        <p>Ночь самной {props.price} $</p>
      </div>
    )
  }