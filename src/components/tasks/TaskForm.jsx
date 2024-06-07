import { useEffect, useState } from "react"
import "./Tasks.css"
// import { getUserById, updateTask } from "../../services/userService.jsx"
import { useNavigate } from "react-router-dom"
import { createTask } from "../../services/taskService.jsx"

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

        if (task.task && task.dateToComplete) {
            const newTask = {
                userId: currentUser,
                task: task.task,
                dateToComplete: task.dateToComplete,
                completed: false,
            }

            createTask(newTask).then(() => {
                navigate("/tasks")
            })
        } else {
            window.alert("Please fill out ALL fields!")
        }
    }

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