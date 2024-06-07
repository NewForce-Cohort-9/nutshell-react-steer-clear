import { useEffect, useState } from "react";
import { getAllTasks, completeTask, editTask } from "../../services/taskService.jsx";
import "./Tasks.css"
import React from "react";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";


export const TaskList = ({ currentUser }) => {
    const [allTasks, setAllTasks] = useState([])
    const [completedTask, setCompletedTask] = useState(false)
    const [count, setTaskCount] = useState(0)

    const navigate = useNavigate()

    const getAndSetTasks = () => {
        getAllTasks().then((taskArray) => {
            const userTasks = taskArray.filter(singleTask => singleTask.userId === currentUser && singleTask.completed === false)
            setAllTasks(userTasks)
        })
    }

    useEffect(() => {
        getAndSetTasks()
    }, [currentUser])

    const handleCompletedTask = (taskId, userId, task, dateToComplete, completed) => {
        const setTaskAsComplete = {
            id: taskId,
            userId: userId,
            task: task,
            dateToComplete: dateToComplete,
            completed: completed,
        }

        completeTask(setTaskAsComplete).then(() => {
            getAndSetTasks()
        })
    }

    let numberCount = count

    return (
        <div className="fullPage">
        <section className="tasks-container">
            <header className="task-info">
                <h2>My Tasks</h2>
            </header>
            <div className="task">
                <Table striped hover>
                    <thead className="table-secondary">
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Target Completion Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-dark">
                        {allTasks.map((task) => (
                            <tr key={task.id} className="task">
                                <th scope="row" className="task">
                                    {numberCount += 1}
                                </th>
                                <td className="task">{task.task}
                                    {<span className="edit-link-par"
                                            onClick={() => {
                                                navigate(`/tasks/edit/${task.id}`)
                                            }}
                                            >   
                                            ( <span className="edit-link" >edit</span> )</span>}
                                </td>
                                <td className="task">{task.dateToComplete}</td>
                                <td>
                                    <button className="task-btn"
                                            onClick={() => handleCompletedTask(task.id, task.userId, task.task, task.dateToComplete, true)}
                                    >
                                        Complete Task
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="btn-container-left">
                <button className="form-btn btn-left"
                        onClick={() => {
                            navigate(`/tasks/create`)
                    }}
                >
                    Create New Task
                </button> 
            </div>
        </section>
        </div>
    )
}