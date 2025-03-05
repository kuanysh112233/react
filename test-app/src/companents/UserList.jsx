import React from 'react'
import '../App.css'

export default function UserCard(){
let users = [
    {name: "Аскат", age: 21, email: "askhat@example.com"},
    {name: "Манхуф", age: 22, email: "askhat@example.com"},
    {name: "Аскат", age: 23, email: "askhat@example.com"},
]

    return (
        <div>
           <h1>Пайдаланушылар тізімі</h1>
           {users.map((user, index)=>(
             <UserCard key={index} name={user.name} age={user.age} email={user.email}/>
           ))}
        </div>
    )
  }

  export default function App() {
    return (
        <div>
            <UserList/>
        </div>
            );
    }