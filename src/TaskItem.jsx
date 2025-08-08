export default function TaskItem({task,toggleDone,deleteTask}){
const selectedDate= new Date(task.deadline)
const outDateTime=selectedDate.toLocaleString("en-IN",{
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
    hour: "2-digit",
  minute: "2-digit",
  hour12: true
}).toUpperCase()
const important = task.priority === "Important";
   return( 
   <li key={task.id} className={important?"important-list":"list"}>
        <label className="task-name" style={{color:important?"white":"",textDecoration:task.done?"line-through":"none"}}>
            <input type="checkbox" className={important?"checkbox-imp checkbox":"checkbox"} onClick={()=>toggleDone(task.id)}/>
            {" "+task.title}
        </label>
        <span className="task-deadline" style={{color:important?"white":""}}>{outDateTime}</span>
        <span className="task-priority" style={{color:important?"white":""}}>{task.priority}
        </span>
        <span className="delete-btn" onClick={()=>deleteTask(task.id)} style={{color:important?"white":"",display:task.done?"inline":"none"}}>
            <i className="fa-solid fa-trash"></i>
        </span>
    </li>
)
}