import { useEffect, useState } from "react"
import "./Tasks.css"
import { useNavigate, useParams } from "react-router-dom"
import { editTask, getTaskById } from "../../services/taskService.jsx"

export const EditTask = ({ currentUser }) => {
    const [task, setTask] = useState({task: "", dateToComplete: ""})

    const {taskId} = useParams()

    const navigate = useNavigate()

    useEffect (() => {
        getTaskById(taskId).then((task) => {
            setTask(task)
        })
    }, [])


    const handleEdit = (event) => {
        event.preventDefault()

        if (task.task && task.dateToComplete) {
            const editedTask = {
                id: task.id,
                userId: currentUser,
                task: task.task,
                dateToComplete: task.dateToComplete,
                completed: false,
            }

            editTask(editedTask).then(() => {
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
            <h2>Edit Your Task</h2>
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
                    onClick={handleEdit}>Update</button>
                </div>
            </fieldset>
        </form>
    )
}