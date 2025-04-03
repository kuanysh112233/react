import { useState } from 'react'
import './app.css'


export default function TaskBox() {
const [task, setTask] = useState()
const [tasks,setTasks] = useState([{tackName:"Гүл суару", completed:true},{tackName:"Ұй жумысын орындау", completed: false}])
const [filter,setFilter]= useState('all')
const handleRemove=(id)=>{
  setTasks(tasks.filter((task , index)=>index!=id))
}

const filtereredTasks = tasks.filter((tapsyrma,index)=>{
  if(filter ==="all"){
    return true
  }else if(filter === "complete"){
    return tapsyrma.completed
  }else if(filter === "incomplete"){
    return !tapsyrma.completed
  }
})

function handleSubmit(e){
  e.preventDefault()
  setTasks([...tasks , {tackName : task , completed: false}])
  setTask('')
}
function Click(e){
    setTasks(
        tasks.map((task, i)=>(i=== e ? {...task , completed: !task.completed } : task))
    )
}


  return (
    <div className='box'>

      <form onSubmit={handleSubmit}>
        <input value={task} type="text" onChange={(e)=>setTask(e.target.value)} />
        <button type='submit'>QOSU</button>
      </form><br />
      <div className='filter-box'>
        <button onClick={()=>setFilter('all')}>All</button>
        <button onClick={()=>setFilter('complete')}>Complete</button>
        <button onClick={()=>setFilter('incomplete')}>Incomplete</button>
      </div><br />
      <ul>
        {filtereredTasks.map((tapsyrma , index)=>{
          return <li key={index}>
                    {tapsyrma.tackName}
                    {tapsyrma.completed ? <button onClick={()=>Click(index)} style={{color:"green"}}> 👍</button> : <button onClick={()=>Click(index)}>👎</button>}
                    {<button onClick={()=>handleRemove(index)}>🗑️ </button>}
                 </li>
        })}
      </ul>
    </div>
  )
}