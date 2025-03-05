import React from 'react' 
import '../App.css'

export default function BookCard(props){
    return(
        <div className='div'>
            <div className='card'>
                <img src={props.image} alt="" width="100" />
                <h2>{props.name}</h2>
                <p>{props.avtor}</p>
                <p>{props.year}</p>
                </div>
        </div>
    )
}