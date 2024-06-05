import { useEffect, useState } from "react"
import "./Tasks.css"
// import { getUserById, updateTask } from "../../services/userService.jsx"
import { useNavigate } from "react-router-dom"

export const TaskForm = ({ currentUser }) => {
    const [task, setTask] = useState({task: "", dateToComplete: ""})

    const navigate = useNavigate()

   /*  useEffect(() => {
        getTaskById(currentUser.id).then(data => {
            const taskObj = data[0]
            setTask(taskObj)
        })
    }, [currentUser]) */


    const handleSave = (event) => {
        event.preventDefault()
              
            navigate(`/tasks`)
    }

/*     const handleSave = (event) => {
        event.preventDefault()
        console.log("clicked!")

        const editedTask = {
            id: task.id,
            task: task.task,
            dateToComplete: task.dateToComplete,
            userId: task.userId,
        }

        updateTask(editedTask).then(() => {
            navigate(`/tasks/${currentUser.id}`)
        })
    }
 */
    const handleInputChange = (event) => {
        const stateCopy = { ...task } /* spread operator will spread all of the details of the task object to make a copy */
        stateCopy[event.target.name] = event.target.value
        setTask(stateCopy)
    }

    return (
        <form className="profile">
            <h2>Create A New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label>Task:</label>
                    <input 
                        type="text"
                        name="task"
                        value={task?.task ? task.task : ""}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Target Completion Date:</label>
                    <input 
                        type="text"
                        name="dateToComplete"
                        value={task?.dateToComplete ? task.dateToComplete : ""}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary" 
                    onClick={handleSave}>Save</button>
                </div>
            </fieldset>
        </form>
    )
}