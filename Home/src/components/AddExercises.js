
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddExercises = () => {
    const nav=useNavigate()
    const [name,setname]=useState("")
    const [sets,setsets]=useState("")
    const [reps,setreps]=useState("")
    const [lbs,setlbs]=useState("")
    const [error,setError]=useState(false)

    const addexercise= async()=>{
        if(!name||!sets||!reps||!lbs){
            setError(true)
            return false
        }
      
  
        const userid= JSON.parse(localStorage.getItem("user"))._id
        const result= await fetch("http://localhost:3001/add-exercise",{
            method:"post",
            body:JSON.stringify({name,sets,reps,lbs,userid}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        let r=await result.json()
        console.log(r)
        nav('/exerciselist')

     
    }
  return (
    <div className='product'>
        <h1>Add exercise</h1>
        <input className='inputbox' type="text" placeholder='enter exercise name'
        value={name}
      onChange={(e)=>{setname(e.target.value)}}
        />
        {
            error&& !name &&   <span className='invalid'>enter valid name</span>
        } 
      
        <input type="text" placeholder='enter total sets'
            className='inputbox' 
            value={sets}
            onChange={(e)=>{setsets(e.target.value)}}
        />
             {
            error&& !sets &&   <span className='invalid'>enter valid sets</span>
        } 
      
        <input type="text" placeholder='enter total reps'
            className='inputbox' 
            value={reps}
            onChange={(e)=>{setreps(e.target.value)}}
        />
           {
            error&& !reps &&   <span className='invalid'>enter valid category</span>
        } 
      
        <input type="text" placeholder='enter weight you want to do'
            className='inputbox' 
            value={lbs}
            onChange={(e)=>{setlbs(e.target.value)}}
        />
      {
            error&& !lbs &&  <span className='invalid'>enter valid weight</span>
        } 
        <button className='button' onClick={addexercise}>Add Exercise</button>

    </div>
  )
}

export default AddExercises