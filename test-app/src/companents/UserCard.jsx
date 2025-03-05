import React from 'react'
import '../App.css'

import UserList from './companents/UserList'
export default function UserCard(props){
    return (
        <div className="user-card">
        <h2>{props.name}</h2>
        <p> Жасы: {props.age}</p>
        <p> Email: {props.email}</p>
        </div>
    )
  }

