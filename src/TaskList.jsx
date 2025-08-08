import TaskItem from "./TaskItem"
export default function TaskList({tasks,toggleDone,deleteTask}){
return(
    <>
    <section className="tasks-list">
        <div className="tasks-box">
            <h2>Tasks to do</h2>
            <ul className="tasks">
            {tasks.map((task)=>(
                <TaskItem key={task.id} toggleDone={toggleDone} task={task} deleteTask={deleteTask}/>
            ))}
            </ul>
        </div>
    </section>
    </>
)
}