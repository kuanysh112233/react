import React, { useState } from 'react'

export default function LoginForm() {
    const[email,setEmail]=useState()
    const[name,setName]=useState()
    const[password,setPassword]=useState()
    const[password2,setPassword2]=useState()
    const[error,setError]= useState()

    let nameRegex = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/
    let passwordRegex =  /^(?=.*[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә])(?=.*\d)(?=.*[\W_])[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\d\W_]+$/;
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Name:" ,name);
        console.log("Email:" ,email);
        console.log("Password:",password);

        if(!nameRegex.test(name)){
            setError("Атыныз міндетті турде әріптерден туруы керек")
            return
        }
        if(!passwordRegex.test(password,password2)){
            setError("Паролді дұрыс енгіз")
            return
        }
        if(!email.includes("@")){
            setError("Email -ді қате дұрыс енгізініз")
            return
        }
        if(password.length<8){
            setError("Құпия сөз 8 танбадан кем болмауы тиіс")
            return
        }
        if(password!=password2){
            setError("Құпия сөз сәйкес келмейді")
            return

        }
        setError("")
        console.log("Satti oryndaldy");
        
        
    }
  return (
    <div>
      <h1>Тіркелу формасы</h1>
      <form onClick={handleSubmit}>
      <div>
            <label htmlFor="name">NAME</label>
            <input 
            type="text" 
            name='name' 
            placeholder='Enter name'
            onChange={(e)=>setName(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="email">EMAIL</label>
            <input 
            type="text" 
            name='email' 
            placeholder='example@gmail.com'
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="password">PASSWORD</label>
            <input 
            type="password" 
            name='password'
            placeholder='*********'
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="password2">PASSWORD</label>
            <input 
            type="password" 
            name='password2'
            placeholder='*********'
            onChange={(e)=>setPassword2(e.target.value)}
            required
            />
        </div>
        <button type='sudmit'>SUBMIT</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  )
}
