import React, { useEffect, useState } from 'react'

export default function UseEEffet() {
const[san,SetSan]=useState(()=>{
    let savedSan = localStorage.getItem('san')
    return savedSan==null ? 0: parseInt(savedSan)
})
// console.log("компанент кайта жуктеледи");
useEffect(()=>{
    console.log("san");
    localStorage.setItem('san',san)
},[san])

  return (
    <>
     <div>{san}</div>
     <button onClick={()=>SetSan(san+1)}>++++</button>  
    </>
  )
}
