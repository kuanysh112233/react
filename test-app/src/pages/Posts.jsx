import React, { useEffect, useState } from 'react'
import NavBar from '../companents/NavBar'
import { Link } from 'react-router-dom'

export default function Posts() {
    let [posts,setPosts]=useState([])

    async function fethData() {
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

            if(!response.ok){
                throw new Error("Suranys Qatelykter payda boldy")
            }
            let date = await response.json()
            if(date){
                setPosts(date)
                
            }
        }catch(err){
            console.log(err);
            
        }
    }

    useEffect(()=>{
        fethData()
    },[])



  return (
    <div>
      <NavBar/>
      <h1>Barluq Aqparat</h1>
      <ul>
        {posts.map((post)=>{
            return (<li key={post.id}>
                <p>{post.title}</p>
                <Link to={`/posts/${post.id}`}>Tolygyraq</Link>
                </li>

            )
        })}
      </ul>
    </div>
  )
}
