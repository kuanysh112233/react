import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import NavBar from '../companents/NavBar'


export default function PostDetail() {
    let {id} = useParams()
    let [post,setPosts]=useState()

    async function fetchDate() {
        try{
            let recponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
            if(!recponse.ok){
                throw new Error("qate")
            }
            let date = await recponse.json()
            setPosts(date)
        }
        catch(err){
            console.log(err);
            
        }
    }

    useEffect(()=>{
        fetchDate()
    },[id])

  if(post){
    return (
        <div>
          <Link to={'/posts'}>Nazad</Link>
          <h1>Post aqparat</h1>
          <div>
            {post.title}
            {post.body}
          </div>
        </div>
      )
    }
  }
