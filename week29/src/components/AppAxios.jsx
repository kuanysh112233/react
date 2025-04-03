import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';



export default function AppAxios() {
    const[bodyText,setBodyText]=useState()
    const[titelText, setTitelText]=useState()
    const[message, setMessage]=useState()
    const[data, setData]=useState()
    const[error, setError]=useState()
    
    // async function fethDate(){
    //     try{
    //         let respons = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         console.log(respons.data);
            

    //     }catch(err){
    //         if(err.status === 404){
    //             console.log("LOL");
                
    //         }
    //     }
    //   }
    //   useEffect(()=>{
    //     fethDate()
    //   },[])

      async function fethDate(){
        try{
            let respons = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                titel:titelText,
                userId:101,
                body:bodyText
            })
            if(respons.data){
                setMessage('Succesfully sent!')
                setData(respons.data)
                setTitelText('')
                setBodyText('')
            }
            

        }catch(err){
            if (err.message) {
                setError(err.message); 
            }else if (err.request){
                setError(err.request.status);
            }else{
                setError(err.name);
                
            }

        }
      }



      const handleSubmit=(e)=>{
        e.preventDefault()
        fethDate()
        setMessage('SENDING....')
      }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="">Body text</label><br />
    <input type="text" placeholder='Entet body text' value={bodyText} onChange={(e)=>setBodyText(e.currentTarget.value)}/><br />
    <label htmlFor="">Titel text</label><br />
    <input type="text" placeholder='Entet titel text' value={titelText} onChange={(e)=>setTitelText(e.currentTarget.value)}/><br /><br />
    {error ?
    (<p style={{color:"red"}}>{error}</p>)
        :
        message && <p style={{color:"green"}}>{message}</p>}
    <button type='submit'>SEND</button>
    </form>
    {data &&
    <div>
        <p>{data.id}</p>
        <h2>{data.titel}</h2>
        <p>{data.body}</p>
    </div>}
    </>
  )
}
