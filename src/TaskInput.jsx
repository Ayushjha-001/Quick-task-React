import { useState } from "react";
export default function TaskInput({addTask}){
const[title,setTitle]=useState("")
const[deadline,setDeadline]=useState("")
const[priority,setPriority]=useState("Select Priority")
const handleSubmitBtn=()=>{
    if(title=="") return alert("Please enter the task")
    if(deadline=="")return alert("Please set a deadline")
    if(priority=="Select Priority") return alert("Please select a priority")
    if(new Date(deadline)< new Date()) return alert("Deadline can't be in the past")
    const task={
id: Date.now(),
title,
deadline,
priority,
done:false
}
console.log(task)
addTask(task)
setTitle("")
setDeadline("")
setPriority("Select Priority")
}
return(
    <section className="input-area">
    <h3 className="input-heading">Title</h3>
    <input type="text" placeholder="Enter task here" className="input-content" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
<br />
  <div className="input-handle">
        <h3 className="input-heading">Deadline</h3>
        <input placeholder="Deadline" value={deadline} min={new Date().toISOString().slice(0,16)} onChange={e=>setDeadline(e.target.value)} className="input-content"  type="datetime-local"></input><br/>
         <h3 className="input-heading">Priority</h3>
         <select value={priority} onChange={e=>setPriority(e.target.value)} className="input-content" title="priority">
            <option value="Select Priority" disabled>Select Priority</option>
            <option value="Normal">Normal</option>
            <option value="Important">Important</option>
         </select><br/>
         </div>
         <div className="btn"><button id="submit-task" type="button" onClick={handleSubmitBtn}>Submit</button></div>
          </section>
           
          )
        }
