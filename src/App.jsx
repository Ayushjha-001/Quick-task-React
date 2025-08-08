import { useState,useEffect } from 'react';
import './style.css';
import TaskInput from "./TaskInput"
import TaskList from "./TaskList"
import Timer from "./Timer"

function App() {
  const[tasks,setTask]=useState(()=>{
    const savedTask= localStorage.getItem("tasks");
    return savedTask? JSON.parse(savedTask):[]
  })
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask=(task)=>{
setTask((prev)=>[...prev,task])
  }
  const toggleDone=(id)=>{
setTask(prev=>
  prev.map(task=>task.id===id?{...task,done:!task.done}:task
  )
)
  }
  const deleteTask=(id)=>{
    setTask(prev=>prev.filter(task=>task.id!==id))
  }
  return (
    <main className="container">
      <h1 id="heading">Quick Task</h1>
      <div className='to-do'>
        <TaskInput addTask={addTask}/>
         <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask}/>
        <Timer/> 
      </div>
    </main>
  );
}

export default App;
